import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

const meta: Meta<typeof Card> = {
  title: "Raw/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "Button component with tailwindcss variants.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    children: "Hello World!",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "white",
  },
};

export const Neutral: Story = {
  args: {
    color: "neutral",
  },
};
