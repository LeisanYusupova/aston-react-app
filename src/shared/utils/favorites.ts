import { getItems, setItems } from 'src/shared/utils/storage.ts';

export function isItemInFavorites(id: number, userEmail: string): boolean {
  const favorites = getItems(userEmail);
  return favorites.some((item) => item.id === id);
}

export function updateFavorites(item, userEmail: string): void {
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
