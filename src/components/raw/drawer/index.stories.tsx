import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from ".";

const meta: Meta<typeof Drawer.Container> = {
  title: "Raw/Drawer/Drawer",
  component: Drawer.Container,
  parameters: {
    docs: {
      description: {
        component: "Drawer component with tailwindcss variants.",
      },
    },
  },
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
  },
  tags: ["autodocs"],
  args: {
    trigger: <button>Open Drawer</button>,
    children: (
      <>
        <Drawer.Header onClose={() => {}}>Hello World!</Drawer.Header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          temporibus, iure dolor perspiciatis dolore beatae assumenda saepe,
          animi harum voluptas dolorem facere, voluptates inventore quas quos
          quae! Temporibus, quis amet?
        </p>
        <Drawer.Footer>
          <p>Meu footer</p>
        </Drawer.Footer>
      </>
    ),
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
