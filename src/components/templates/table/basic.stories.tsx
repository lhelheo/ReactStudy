"use client";
import { Meta, StoryObj } from "@storybook/react";
import { BasicTable } from "./basic";

const meta: Meta<typeof BasicTable> = {
  title: "Templates/Table/Basic",
  component: BasicTable,
  parameters: {
    docs: {
      description: {
        component: "Example of a basic table component.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    columns: [
      { key: "name", label: "Name" },
      { key: "age", label: "Age" },
      { key: "category", label: "Category" },
      {
        key: "actions",
        label: "Actions",
        actions: [
          {
            children: "Edit",
            onClick: (row) => alert(`Edited ${row["name"]}`),
          },
          {
            children: "Delete",
            onClick: (row) => alert(`Deleted ${row["name"]}`),
          },
        ],
      },
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
    tab: {
      items: [
        { value: "", label: "All" },
        { value: "a", label: "Category A" },
        { value: "b", label: "Category B" },
      ],
      filterKey: "category",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
