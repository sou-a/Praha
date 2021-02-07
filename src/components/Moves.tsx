import { FC } from 'react';
import { History } from '../domain/entity';

export interface MovesProps {
  histories: History;
  jumpTo: (move: number) => void;
}

export const Moves: FC<MovesProps> = ({ histories, jumpTo }) => (
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
