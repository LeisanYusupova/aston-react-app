export const getFavoriteItems = (user: string) => {
  const items = localStorage.getItem(`${user}-favorites`);
  return items ? JSON.parse(items) : null;
};

export const getSearchItems = (user: string) => {
  const items = localStorage.getItem(`${user}-search`);
  return items ? JSON.parse(items) : null;
};
