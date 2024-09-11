import { Meta, StoryObj } from "@storybook/react";
import { Table } from ".";

const meta: Meta<typeof Table.Container> = {
  title: "Raw/Table",
  component: Table.Container,
  parameters: {
    docs: {
      description: {
        component: "Example of full table component.",
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
        <thead>
          <Table.Row>
            <Table.Column>CNPJ</Table.Column>
            <Table.Column>Money BR</Table.Column>
            <Table.Column>Percentage</Table.Column>
          </Table.Row>
        </thead>
        <tbody>
          <Table.Row>
            <Table.Cell formatAs="document">47942239000144</Table.Cell>
            <Table.Cell formatAs="cash_brl">100</Table.Cell>
            <Table.Cell formatAs="percentage">0.05</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell formatAs="document">47942239000144</Table.Cell>
            <Table.Cell formatAs="cash_brl">100</Table.Cell>
            <Table.Cell formatAs="percentage">0.05</Table.Cell>
          </Table.Row>
        </tbody>
      </>
    ),
  },
};
