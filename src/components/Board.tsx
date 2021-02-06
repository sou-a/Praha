import { FC } from 'react';
import Square from './Square';
import { ISquare } from '../domain/entity';

interface BoardProps {
  squares: ISquare[];
  onClick: (i: number) => void;
}

const Board: FC<BoardProps> = ({ squares, onClick }) => {
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

export default Board;
