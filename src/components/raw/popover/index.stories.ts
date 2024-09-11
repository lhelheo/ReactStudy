import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from ".";

const meta: Meta<typeof Popover> = {
  title: "Raw/Popover",
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: "Popover component with tailwindcss variants.",
      },
    },
  },
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
    children: "Popover",
    trigger: "click",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    children: "Popover",
    trigger: "click",
  },
};
