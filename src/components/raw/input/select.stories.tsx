import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input.Select> = {
  title: "Raw/Input/Select",
  component: Input.Select,
  parameters: {
    docs: {
      description: {
        component: "InputSelect component with tailwindcss variants.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    children: <option value="1">Option 1</option>,
  },
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
