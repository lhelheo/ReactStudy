import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Button component with tailwindcss variants.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    children: "MyButton",
  },
  argTypes: {
    color: {
      control: "select",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    type: {
      control: "select",
      table: {
        defaultValue: { summary: "button" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
  },
};
