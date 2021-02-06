import { useState } from 'react';
import { ISquare, History } from '../domain/entity';
import {
  calculateWinner,
  getStatus,
  createNewSquares,
} from '../domain/services';
import Board from './Board';
import Moves from './Moves';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Game = () => {
  const [history, setHistory] = useState<History>([
    {
      squares: Array<ISquare>(9).fill(null),
    },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    const _history = history.slice(0, stepNumber + 1);
    // 参照かどうかを気にしなくていいので完結にかける
    const _squares = history[stepNumber].squares;
    if (calculateWinner(_squares) || _squares[i]) {
      return;
    }
    // imuutableに
    const squares = createNewSquares(_squares, xIsNext, i);

    setHistory(_history.concat([{ squares }]));
    setStepNumber(_history.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const status = getStatus(winner, xIsNext);

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>
          <Moves histories={history} jumpTo={jumpTo} />
        </ol>
      </div>
    </div>
  );
};

export default Game;
