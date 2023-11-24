import { useState } from "react";
import "./App.css";

interface SquareProps {
  value: string | null;
}

function Square({ value }: SquareProps) {
  return <button className="square" >{value}</button>;}

function Board() {
  const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));

  return (
    <>
      <Square value={squares[0]}/>
    </>
  );
}

export default Board;
