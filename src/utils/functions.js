export const deleteParam = (name) => {
  const params = new URLSearchParams(window.location.search);
  params.delete(name);
  return params.keys() === 0
    ? window.location.pathname
    : `${window.location.pathname}?${params.toString()}`;
};

export const setParam = (name, value) => {
  const params = new URLSearchParams(window.location.search);
  params.set(name, value);
  if (name !== 'page' && params.has('page')) params.delete('page');
  return `${window.location.pathname}?${params.toString()}`;
};
