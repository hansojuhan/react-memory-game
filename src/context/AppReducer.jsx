export default (state, action) => {
  switch (action.type) {

    case 'CLICK_CARD':

      const uniqueClick = action.payload !== state.lastClickId;
      const newScore = uniqueClick ? state.score++ : 0;
      const newBestScore = uniqueClick && newScore > state.bestScore ? newScore : state.bestScore;

      return {
        ...state,
        score: newScore,
        bestScore: newBestScore,
        lastClickId: action.payload
      }

    default:
      return state;
  }
}
