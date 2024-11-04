import { createContext, useEffect, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

// const initialState = {
//   cards: [
//     { id: 1, image: null },
//     { id: 2, image: null },
//     { id: 3, image: null },
//     { id: 4, image: null },
//     { id: 5, image: null },
//     { id: 6, image: null },
//     { id: 7, image: null },
//     { id: 8, image: null },
//     { id: 9, image: null },
//     { id: 10, image: null },
//     { id: 11, image: null },
//     { id: 12, image: null }
//   ],
//   score: 0,
//   bestScore: 0,
//   lastClickId: null
// }
const initialState = {
  cards: [
    { id: 1, image: 'src/assets/gifs/1.webp' },
    { id: 2, image: 'src/assets/gifs/2.webp' },
    { id: 3, image: 'src/assets/gifs/3.webp' },
    { id: 4, image: 'src/assets/gifs/4.webp' },
    { id: 5, image: 'src/assets/gifs/5.webp' },
    { id: 6, image: 'src/assets/gifs/6.webp' },
    { id: 7, image: 'src/assets/gifs/7.webp' },
    { id: 8, image: 'src/assets/gifs/8.webp' },
    { id: 9, image: 'src/assets/gifs/9.webp' },
    { id: 10, image: 'src/assets/gifs/10.webp' },
    { id: 11, image: 'src/assets/gifs/11.webp' },
    { id: 12, image: 'src/assets/gifs/12.webp' }
  ],
  score: 0,
  bestScore: 0,
  lastClickId: null
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions (currently just one, click on card)
  function clickCard(id) {
    dispatch({
      type: 'CLICK_CARD',
      payload: id
    });
  }

  // Function to fetch a GIF for each card - TODO: Gets error 429 after a while
  // async function fetchCatGif(cardId) {
  //   const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

  //   try {
  //     const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=cat&rating=g`);
  //     const data = await response.json();
  //     const imageUrl = data.data.images.original.webp;

  //     dispatch({
  //       type: 'SET_CARD',
  //       payload: { id: cardId, imageUrl }
  //     });

  //   } catch (error) {
  //     console.log("Error fetching a cat gif, error: ", error);
  //     return null;
  //   }
  // }

  // useEffect(() => {
  //   state.cards.forEach(card => {
  //     fetchCatGif(card.id);
  //   });
  // }, []);

  return (
    <GlobalContext.Provider value={{
      ...state, // Spread all properties of state into the context value
      clickCard // Click card action
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;


