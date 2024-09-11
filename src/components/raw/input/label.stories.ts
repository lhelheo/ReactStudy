import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";

const meta: Meta<typeof Label> = {
  title: "Raw/Label",
  component: Label,
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
    required: true,
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
