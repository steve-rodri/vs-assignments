export default function reducer(state, action) {
  let newState, tmpStore, index;
  const { type, payload } = action;
  switch (type) {
    case "ADD_COINS":
      newState = { ...state, store: [...state.store, ...payload] };
      tmpStore = [...newState.store];
      index = state.page > 1 ? (state.page - 1) * 100 : 0;
      newState.coins = tmpStore.splice(index, 100);
      return newState;

    case "UPDATE_COIN":
      const store = state.store.map(coin =>
        coin.id === payload.id ? payload : coin
      );
      const coins = state.coins.map(coin =>
        coin.id === payload.id ? payload : coin
      );
      return { ...state, store, coins };

    case "NEXT_PAGE":
      newState = { ...state, page: state.page + 1 };
      if (state.store[state.page * 100]) {
        tmpStore = [...state.store];
        index = newState.page > 1 ? (newState.page - 1) * 100 : 0;
        newState.coins = tmpStore.splice(index, 100);
      }
      return newState;

    case "PREV_PAGE":
      if (state.page === 1) return state;
      newState = { ...state, page: state.page - 1 };
      if (state.store[newState.page * 100 - 1]) {
        tmpStore = [...state.store];
        index = newState.page > 1 ? (newState.page - 1) * 100 : 0;
        newState.coins = tmpStore.splice(index, 100);
      }
      return newState;

    default:
      return state;
  }
}
