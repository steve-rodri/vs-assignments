export const saveState = (label, state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem(label, serializedState);
};

export const loadState = label => {
  const serializedState = localStorage.getItem(label);
  if (serializedState === null) return undefined;
  return JSON.parse(serializedState);
};
