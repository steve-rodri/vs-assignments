export const loadState = label => {
  try {
    const serializedState = localStorage.getItem(label);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state, label) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(label, serializedState);
  } catch (err) {}
};
