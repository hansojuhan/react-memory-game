export default (state, action) => {
  switch (action.type) {

    case 'CLICK_CARD':
      return {
        ...state,
        score: action.payload !== state.lastClickId ? state.score++ : 0,
        lastClickId: action.payload
      }

    default:
      return state;
  }
}
