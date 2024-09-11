import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input.File> = {
  title: "Raw/Input/File",
  component: Input.File,
  parameters: {
    docs: {
      description: {
        component: "InputFile component with tailwindcss variants.",
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
