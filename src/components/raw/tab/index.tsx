"use client";
import { cx } from "@/utils/tailwind";
import { useState } from "react";
import { tv } from "tailwind-variants";

const tabItemStyles = tv({
  base: [
    "px-4 py-1 w-full text-center cursor-pointer ease-linear transition-all",
  ],
  variants: {
    color: {
      primary: ["text-neutral-700", "hover:text-primary-500"],
    },
    active: {
      true: ["cursor-default"],
      false: ["cursor-pointer"],
    },
  },
  compoundVariants: [
    {
      color: "primary",
      active: true,
      className: "text-primary-500 font-medium",
    },
  ],
  defaultVariants: {
    color: "primary",
  },
});

const tabStyles = tv({
  base: [
    "w-full grid grid-cols-1 md:grid-cols-3 items-center justify-evenly rounded-[6px] ease-linear transition-all",
    "lg:w-fit lg:flex lg:flex-nowrap",
  ],
  variants: {
    color: {
      primary: ["border border-neutral-300"],
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

interface TabProps {
  className?: string;
  itemClassName?: string;
  color?: "primary";
  items: {
    label: string;
    value: string;
  }[];
  // eslint-disable-next-line no-unused-vars
  onTabClick?: (value: string) => void;
}

export const Tab = (props: TabProps) => {
  const { color } = props;
  const [activeItem, setActiveItem] = useState<string>(props.items[0].value);

  const handleClick = (value: string) => {
    setActiveItem(value);
    if (props.onTabClick) props.onTabClick(value);
  };

  return (
    <ul className={cx(tabStyles({ color }), props.className)}>
      {props.items.map((item, index) => (
        <li
          key={`Tab (${index}): ${item.label} - ${item.value}`}
          className={cx(
            tabItemStyles({ color, active: activeItem === item.value }),
            props.itemClassName,
          )}
          onClick={() => handleClick(item.value)}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};
