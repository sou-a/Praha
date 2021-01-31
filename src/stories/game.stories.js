/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Game } from "../index";


export default {
  component: Game,
  title: 'Game',
};

const Template = args => <Game {...args} />;

export const Default = Template.bind({});
Default.args = {
};
