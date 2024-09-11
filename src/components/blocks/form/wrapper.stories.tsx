import { Meta, StoryObj } from "@storybook/react";
import { FormWrapper } from "./wrapper";
import { Input } from "@/components/raw/input";

const meta: Meta<typeof FormWrapper> = {
  title: "Blocks/Form/Wrapper",
  component: FormWrapper,
  parameters: {
    docs: {
      description: {
        component: "Wrapper component for fields in forms.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <Input.Label htmlFor="name">Nome</Input.Label>
        <Input.Text id="name" name="name" />
      </>
    ),
  },
};
