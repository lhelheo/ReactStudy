import { Meta, StoryObj } from "@storybook/react";
import { FormSubmit } from "./submit";

const meta: Meta<typeof FormSubmit> = {
  title: "Blocks/Form/Submit",
  component: FormSubmit,
  parameters: {
    docs: {
      description: {
        component: "Submit button component for forms.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    children: "Submit",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
