import { FC } from 'react';
import { Square } from './Square';
import { InSquare } from '../domain/entity';

interface BoardProps {
  squares: InSquare[];
  onClick: (i: number) => void;
}

export const Board: FC<BoardProps> = ({ squares, onClick }) => {
  return (
    <div>
      {[...Array(3)].map((_, i) => {
        return (
          <div className="board-row" key={i}>
            {[...Array(3)].map((_, j) => {
              const index = 3 * i + j;
              return (
                <Square
                  value={squares[index]}
                  onClick={() => onClick(index)}
                  key={j}
                ></Square>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
