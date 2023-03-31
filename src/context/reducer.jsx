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
    case "ADD_TO_DETAIL_ARTIST":
      const isDetailArtistExisted = state.detailArtist.find(
        (artist) => artist.id === action.payLoad.id
      );
      if (isDetailArtistExisted) {
        return state;
      } else {
        return { ...state, detailArtist: [action.payLoad] };
      }
    case "ADD_TO_DETAIL_TV":
      const isDetailTVExisted = state.detailTV.find(
        (tv) => tv.id === action.payLoad.id
      );
      if (isDetailTVExisted) {
        return state;
      } else {
        return { ...state, detailTV: [action.payLoad] };
      }

    default:
      return state;
  }
};
