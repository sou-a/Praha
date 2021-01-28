/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Board } from "./index";


export default {
  component: Board,
  title: 'Board',
};

const Template = args => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
    squares: Array(9).fill(null),
};

export const FillTriangle = Template.bind({});
FillTriangle.args = {
  squares: Array(9).fill('△'),
};

