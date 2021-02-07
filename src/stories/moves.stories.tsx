import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Moves, MovesProps } from '../components/Moves';
import { InSquare } from '../domain/entity';

export default {
  component: Moves,
  title: 'Moves',
};

const Template: Story<MovesProps> = ({ histories, jumpTo }) => (
  <Moves {...{ histories, jumpTo }} />
);

export const Default = Template.bind({});
Default.args = {
  histories: [{ squares: Array<InSquare>(9).fill(null) }],
};
