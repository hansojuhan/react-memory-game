// Components
import Card from "./Card";
// Pull in global state
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function CardContainer() {
  // Get cards from global state
  const { cards } = useContext(GlobalContext);
  
  // Shuffle card order and store it in cardOrder
  const shuffledCards = shuffleCards([...cards]); // Spread operator to create a copy

  return (
    <div className="flex flex-wrap justify-evenly mt-32 my-8">
      {shuffledCards.map((card) => (
        <Card key={card.id} id={card.id} source={card.image} />
      ))}

    </div>
  );
}

function shuffleCards(array) {
  let currentIndex = array.length

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
