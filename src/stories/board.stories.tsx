import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Board, BoardProps } from '../components/Board';
import { InSquare } from '../domain/entity';

export default {
  component: Board,
  title: 'Board',
};

const Template: Story<BoardProps> = ({ squares, onClick }) => (
  <Board {...{ squares, onClick }} />
);

export const Default = Template.bind({});
Default.args = {
  squares: Array<InSquare>(9).fill(null),
};

export const FillTriangle = Template.bind({});
FillTriangle.args = {
  squares: Array(9).fill('△'),
};
