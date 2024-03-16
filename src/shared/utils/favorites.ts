import { getItems, setItems } from 'src/shared/utils/storage.ts';
import { db } from 'src/features/firebase/firebase.ts';
import { doc, setDoc } from 'firebase/firestore';
import { FavoriteFilmInterface } from 'src/shared/types/types.tsx';

export function isItemInFavorites(id: number, userEmail: string): boolean {
  const favorites = getItems(userEmail);
  return favorites.some((item) => item.id === id);
}

export function updateFavorites(
  item: FavoriteFilmInterface,
  userEmail: string,
): void {
  let favorites = getItems(userEmail);
  if (!isItemInFavorites(item.id, userEmail)) {
    favorites.push(item);
  } else {
    favorites = favorites.filter((favItem) => favItem.id !== item.id);
  }
  if (userEmail) {
    setItems(userEmail, favorites);
  }
}

export const addToFavoritesDb = async (
  item: FavoriteFilmInterface,
  userEmail: string,
) => {
  try {
    await setDoc(doc(db, `${userEmail}favorites`, String(item.id)), item);
  } catch (error) {
    console.error(`Error from Firebase ${error}`);
  }
};
