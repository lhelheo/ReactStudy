import { Meta, StoryObj } from "@storybook/react";
import { Divider } from ".";

const meta: Meta<typeof Divider> = {
  title: "Raw/Divider",
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: "Divider component with tailwindcss variants.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    color: "neutral",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    color: "neutral",
  },
};

export const NeutralChildren: Story = {
  args: {
    children: "Divider",
    color: "neutral",
  },
};
