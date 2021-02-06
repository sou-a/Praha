import { FC } from 'react';
import { History } from '../domain/entity';

interface MovesProps {
  histories: History;
  jumpTo: (move: number) => void;
}

const Moves: FC<MovesProps> = ({ histories, jumpTo }) => (
  <ol>
    {histories.map((_, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      );
    })}
  </ol>
);

export default Moves;
