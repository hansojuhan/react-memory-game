// Pull in global state
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Card({ id, source }) {
  const { clickCard } = useContext(GlobalContext);

  return (
    <form onClick={() => clickCard(id)}>
    <div className="w-64 h-64 bg-slate-400 p-4 rounded-xl m-4 hover:bg-slate-300 active:bg-slate-400 hover:cursor-pointer select-none">
      <img className="w-full h-full object-cover" src={source} />
    </div>
    </form>
  );
}
