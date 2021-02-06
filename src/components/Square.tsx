import { FC } from 'react';
import { InSquare } from '../domain/entity';

interface SquareProps {
  value: InSquare;
  onClick: () => void;
}

export const Square: FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};
