import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

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
  bestScore: 0
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{
      cards: state.cards
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
