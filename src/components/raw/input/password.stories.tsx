import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input.Password> = {
  title: "Raw/Input/Password",
  component: Input.Password,
  parameters: {
    docs: {
      description: {
        component: "InputPassword component with tailwindcss variants.",
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
