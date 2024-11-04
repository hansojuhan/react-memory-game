// Pull in global state
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Header() {
  const { score } = useContext(GlobalContext);

  return (
    <header className="fixed top-0 z-50 w-full flex items-center justify-between bg-slate-700 py-8 px-4 border-b-2 border-b-slate-400 shadow-black">
      <div className="flex flex-col justify-evenly gap-2">
        <h1 className="text-4xl">Memory Game</h1>
        <p>Click on an image, but not more than once!</p>
      </div>
      <div>
        <h2 className="text-4xl bg-orange-700 py-2 px-4 rounded">Score: <span>{score}</span></h2>
      </div>
      <div>
        <h3 className="text-2xl bg-slate-800 py-2 px-4 rounded">Best score: <span>0</span></h3>
      </div>
    </header>
  );
}
