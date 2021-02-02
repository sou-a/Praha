/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Board } from "../index";
import * as SquareStories from './square.stories';


export default {
  component: Board,
  title: 'Board',
};

const Template = args => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
    squares: Array(12).fill(null),
};

export const FillTriangle = Template.bind({});
FillTriangle.args = {
  squares: Array(12).fill(SquareStories.Triangle.args.value),
};

