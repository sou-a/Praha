import { FC } from 'react';
import Square from './Square';
import { ISquare } from '../domain/entity';

interface BoardProps {
  squares: ISquare[];
  onClick: (i: number) => void;
}

const Board: FC<BoardProps> = ({ squares, onClick }) => {
  return (
    <div className="board">
      {Array<number>(9)
        .fill(0)
        .map((_, i) => (
          <Square value={squares[i]} onClick={() => onClick(i)} />
        ))}
    </div>
  );
};

export default Board;
