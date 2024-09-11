import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input.Checkbox> = {
  title: "Raw/Input/Checkbox",
  component: Input.Checkbox,
  parameters: {
    docs: {
      description: {
        component: "InputCheckbox component with tailwindcss variants.",
      },
    },
  },
  argTypes: {
    size: {
      table: {
        disable: true,
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
