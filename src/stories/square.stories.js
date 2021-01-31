/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Square } from "../index";

export default {
  component: Square,
  title: 'Square',
};

const Template = args => <Square {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const X = Template.bind({});
X.args = {
  value: 'X'
};

export const Circle = Template.bind({});
Circle.args = {
  value: 'O'
};

export const Triangle = Template.bind({});
Triangle.args = {
  value: '△'
};

export const han = Template.bind({});
han.args = {
  value: '半'
};

export const cho = Template.bind({});
cho.args = {
  value: '丁'
};