import { Meta, StoryObj } from "@storybook/react";
import { FormSuccess } from "./success";

const meta: Meta<typeof FormSuccess> = {
  title: "Blocks/Form/Success",
  component: FormSuccess,
  parameters: {
    docs: {
      description: {
        component: "Success component for forms.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    message: "Sucesso ao enviar seu formulário!",
    redirect: "/",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
