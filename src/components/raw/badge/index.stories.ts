import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "Raw/Badge",
  component: Badge,
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
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
  },
};

export const Success: Story = {
  args: {
    color: "success",
  },
};

export const Warning: Story = {
  args: {
    color: "warn",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
  },
};
