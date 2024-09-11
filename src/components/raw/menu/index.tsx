"use client";
import { ReactNode, useState } from "react";
import { tv } from "tailwind-variants";
import { cx } from "@/utils/tailwind";

const dropdownMenuStyles = tv({
  base: "absolute mt-2 w-56 rounded-md shadow-lg",
  variants: {
    color: {
      primary: "bg-white text-black",
      secondary: "bg-gray text-black",
      danger: "bg-white text-black",
      neutral: "bg-transparent text-black",
      warn: "bg-white text-black",
    },
    placement: {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      right: "top-1/2 left-full -translate-y-1/2 ml-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "top-1/2 right-full -translate-y-1/2 mr-2",
    },
  },
  defaultVariants: {
    color: "primary",
    placement: "bottom",
  },
});

const dropdownItemStyles = tv({
  base: "px-4 py-2 cursor-pointer hover:bg-gray-light flex items-center gap-3 ease-linear transition-all rounded-md",
  variants: {
    color: {
      primary: "bg-white text-black",
      secondary: "bg-gray text-black",
      danger: "bg-white text-black",
      neutral: "bg-transparent text-black",
      warn: "bg-white text-black",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

interface MenuItem {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
}

interface MenuProps {
  className?: string;
  children: ReactNode;
  color?: "primary" | "secondary" | "neutral" | "warn" | "danger";
  items: MenuItem[];
  onClick?: (item: MenuItem) => void;
  placement?: "top" | "right" | "bottom" | "left";
}

export const Menu = (props: MenuProps) => {
  const { color, placement } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: MenuItem) => {
    if (props.onClick) props.onClick(item);
    if (item.onClick) item.onClick();
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left cursor-pointer"
      onClick={toggleDropdown}
    >
      {props.children}
      {isOpen && (
        <div
          className={cx(
            dropdownMenuStyles({ color, placement }),
            props.className,
          )}
        >
          {props.items.map((item, index) => (
            <div
              key={index}
              className={cx(dropdownItemStyles({ color }), props.className)}
              onClick={() => handleItemClick(item)}
            >
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
