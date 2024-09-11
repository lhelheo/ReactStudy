import { Meta, StoryObj } from "@storybook/react";
import { FormError } from "./error";

const meta: Meta<typeof FormError> = {
  title: "Blocks/Form/Error",
  component: FormError,
  parameters: {
    docs: {
      description: {
        component: "Error component for forms.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    message: "An error occurred when submitting the form.",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
