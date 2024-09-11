import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input.Email> = {
  title: "Raw/Input/Email",
  component: Input.Email,
  parameters: {
    docs: {
      description: {
        component: "InputEmail component with tailwindcss variants.",
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
  },
};

export const None: Story = {
  args: {
    color: "none",
  },
};
