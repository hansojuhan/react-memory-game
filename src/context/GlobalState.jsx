import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  cards: [
    { id: 1, image: null },
    { id: 2, image: null },
    { id: 3, image: null },
    { id: 4, image: null },
    { id: 5, image: null },
    { id: 6, image: null },
    { id: 7, image: null },
    { id: 8, image: null },
    { id: 9, image: null },
    { id: 10, image: null },
    { id: 11, image: null },
    { id: 12, image: null }
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

  // Function to fetch a GIF for each card
  async function fetchCatGif(cardId) {
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=cat&rating=g`);
      const data = await response.json();
      const imageUrl = data.data.images.original.webp;

      dispatch({
        type: 'SET_CARD',
        payload: { id: cardId, imageUrl }
      });

    } catch (error) {
      console.log("Error fetching a cat gif, error: ", error);
      return null;
    }
  }

  useEffect(() => {
    state.cards.forEach(card => {
      fetchCatGif(card.id);
    });
  }, []);

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


