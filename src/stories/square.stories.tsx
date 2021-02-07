import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Square, SquareProps } from '../components/Square';

export default {
  component: Square,
  title: 'Square',
};

const Template: Story<SquareProps> = ({ value, onClick }) => (
  <Square {...{ value, onClick }} />
);

export const Default = Template.bind({});
Default.args = {
  value: null,
};

export const Cross = Template.bind({});
Cross.args = {
  value: 'X',
};

export const Circle = Template.bind({});
Circle.args = {
  value: 'O',
};
