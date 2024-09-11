import type { Meta, StoryObj } from "@storybook/react";
import { Widget } from ".";

const meta: Meta<typeof Widget> = {
  title: "Raw/Widget",
  component: Widget,
  parameters: {
    docs: {
      description: {
        component: "Button component with tailwindcss variants.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: {
        type: "select",
        options: ["topLeft", "topRight", "bottomLeft", "bottomRight"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Widget content",
    placement: "topLeft",
    trigger: "click",
  },
};
