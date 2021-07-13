import { ComponentStory } from "@storybook/react";
import React from "react";

import { Button } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
  argTypes: { onPress: { action: "pressed" } },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  label: "test",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  label: "test",
};

export const Cancel = Template.bind({});
Cancel.args = {
  color: "cancel",
  label: "test",
};
