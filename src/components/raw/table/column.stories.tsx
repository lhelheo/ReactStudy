import { Meta, StoryObj } from "@storybook/react";
import { TableColumn } from "./column";

const meta: Meta<typeof TableColumn> = {
  title: "Raw/Table/Column",
  component: TableColumn,
  parameters: {
    docs: {
      description: {
        component: "TableColumn component with tailwindcss variants.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Table Column",
  },
};

export const PrimaryClickable: Story = {
  args: {
    children: "Table Column",
    onClick: () => {},
  },
};
