"use client";
import { ReactNode, useState } from "react";
import { tv } from "tailwind-variants";
import { cx } from "@/utils/tailwind";

const contentPopoverStyles = tv({
  base: "absolute mt-2 w-56 max-h-[180px] overflow-auto rounded-md shadow-lg",
  variants: {
    color: {
      primary: "bg-black text-white",
      secondary: "bg-white text-black",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

interface PopoverProps {
  color?: "primary" | "secondary";
  children: ReactNode;
  trigger: ReactNode;
  className?: string;
}

export const Popover = (props: PopoverProps) => {
  const { color } = props;
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div onClick={togglePopover} className="cursor-pointer">
        {props.trigger}
      </div>

      {isOpen && (
        <div className={cx(contentPopoverStyles({ color }), props.className)}>
          <div className="p-4">{props.children}</div>
        </div>
      )}
    </div>
  );
};
