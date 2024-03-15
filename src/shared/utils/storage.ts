export const getItems = (user: string) => {
  const items = localStorage.getItem(`favorites-${user}`);
  return items ? JSON.parse(items) : [];
};

export const setItems = (user: string, items): void => {
  localStorage.setItem(`favorites-${user}`, JSON.stringify(items));
};
