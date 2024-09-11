import { Meta, StoryObj } from "@storybook/react";
import { MenuTable } from ".";

const meta: Meta<typeof MenuTable> = {
  title: "Templates/Table/Menu",
  component: MenuTable,
  parameters: {
    docs: {
      description: {
        component: "Example of a Menu Table component.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    columns: [
      { key: "name", label: "Name" },
      { key: "age", label: "Age" },
      { key: "category", label: "Category" },
    ],
    data: [
      { name: "John", age: 25, category: "A" },
      { name: "Jane", age: 22, category: "B" },
      { name: "Doe", age: 30, category: "A" },
    ],
    search: {
      placeholder: "Search by name or age",
      keys: ["name", "age"],
    },
    customChildren: () => (
      <div>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
