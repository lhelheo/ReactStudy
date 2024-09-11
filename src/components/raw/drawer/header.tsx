"use client";
import { cx } from "@/utils/tailwind";
import { ElementType, ReactNode } from "react";
import { tv } from "tailwind-variants";

const drawerHeaderStyles = tv({
  base: ["flex flex-col gap-4 w-full"],
  variants: {
    color: {
      primary: ["bg-white text-black"],
      secondary: ["bg-gray text-black"],
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

interface DrawerHeaderProps {
  children?: ReactNode;
  description?: string;
  className?: string;
  icon?: ElementType;
  onClose?: () => void;
  color?: "primary" | "secondary";
}

export const DrawerHeader = (props: DrawerHeaderProps) => {
  const { color } = props;
  return (
    <div className={cx(drawerHeaderStyles({ color }), props.className)}>
      <div className="flex items-center gap-4 justify-between">
        <h2 className="font-bold">{props.children}</h2>
        {props.icon ? (
          <props.icon
            size={40}
            className="ease-linear transition-all cursor-pointer h-full hover:bg-gray-light rounded-md"
            onClick={props.onClose}
          />
        ) : (
          <p
            className="ease-linear transition-all cursor-pointer h-full hover:bg-gray-light rounded-md"
            onClick={props.onClose}
          >
            Fechar
          </p>
        )}
      </div>
      <p>{props.description}</p>
    </div>
  );
};
