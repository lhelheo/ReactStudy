import { Meta, StoryObj } from "@storybook/react";
import { TableRow } from "./row";

const meta: Meta<typeof TableRow> = {
  title: "Raw/Table/Row",
  component: TableRow,
  parameters: {
    docs: {
      description: {
        component: "TableRow component with tailwindcss variants.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Table Row",
  },
};

export const PrimaryClickable: Story = {
  args: {
    children: "Table Row",
    onClick: () => {},
  },
};
