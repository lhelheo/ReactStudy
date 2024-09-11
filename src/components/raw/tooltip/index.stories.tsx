import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from ".";

const meta: Meta<typeof Tooltip> = {
  title: "Raw/Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: "Button component with tailwindcss variants.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    children: "Hover me",
    description: "Tooltip description",
    placement: "bottom",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Hover me",
    description: "Tooltip description",
    placement: "bottom",
    color: "primary",
  },
};
