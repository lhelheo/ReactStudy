import { Meta, StoryObj } from "@storybook/react";
import { LoadingOverlay } from "./overlay";

const meta: Meta<typeof LoadingOverlay> = {
  title: "Raw/LoadingOverlay",
  component: LoadingOverlay,
  parameters: {
    docs: {
      description: {
        component: "LoadingOverlay component with tailwindcss variants.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    color: "primary",
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
