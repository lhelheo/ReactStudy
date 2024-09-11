import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from ".";

const meta: Meta<typeof ProgressBar> = {
  title: "Raw/ProgressBar",
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component: "ProgressBar component with tailwindcss variants.",
      },
    },
  },
  argTypes: {
    color: {
      control: {
        type: "text",
      },
    },
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: 50,
    maxValue: 100,
  },
};
