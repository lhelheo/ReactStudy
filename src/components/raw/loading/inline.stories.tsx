import { Meta, StoryObj } from "@storybook/react";
import { LoadingInline } from "./inline";

const meta: Meta<typeof LoadingInline> = {
  title: "Raw/LoadingInline",
  component: LoadingInline,
  parameters: {
    docs: {
      description: {
        component: "LoadingInline component with tailwindcss variants.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    children: "Loading inline",
    color: "primary",
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
