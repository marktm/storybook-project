import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/MyButton",
  decorators: [
    (Story, context) => (
      <div style={{ margin: "3em" }}>
        {context.args.myList}
        <Story />
      </div>
    ),
  ],
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    myList: {
      control: "select",
      options: [20, 30, 40, 50],
      defaultValue: 20,
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const MyStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MyStory.args = {
  primary: true,
  label: "Button",
};
