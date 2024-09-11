import { Meta, StoryObj } from "@storybook/react";
import { TableContainer } from "./container";

const meta: Meta<typeof TableContainer> = {
  title: "Raw/Table/Container",
  component: TableContainer,
  parameters: {
    docs: {
      description: {
        component: "TableContainer component with tailwindcss variants.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Table Container",
  },
};
