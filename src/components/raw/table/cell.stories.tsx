import { Meta, StoryObj } from "@storybook/react";
import { TableCell } from "./cell";

const meta: Meta<typeof TableCell> = {
  title: "Raw/Table/Cell",
  component: TableCell,
  parameters: {
    docs: {
      description: {
        component: "TableCell component with tailwindcss variants.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Table Cell",
  },
};

export const PrimaryClickable: Story = {
  args: {
    children: "Table Cell",
    onClick: () => {},
  },
};
