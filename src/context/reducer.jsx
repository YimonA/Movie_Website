export const reducer = (state, action) => {
  switch (action.type) {
    /* */
    case "GET_GENRES":
      return { ...state, genres: action.payLoad };
      case "ADD_TO_DETAIL":
        const isDetailExisted = state.detail.find(
          (item) => item.id === action.payLoad.id
          );
          if (isDetailExisted) {
            return state;
          } else {
            return { ...state, detail: [action.payLoad] };
          }
          
    default:
      return state;
  }
};
