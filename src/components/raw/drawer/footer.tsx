"use client";
import { cx } from "@/utils/tailwind";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const drawerFooterStyles = tv({
  base: ["w-full mt-4"],
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

interface DrawerFooterProps {
  children?: ReactNode;
  className?: string;
  color?: "primary" | "secondary";
}

export const DrawerFooter = (props: DrawerFooterProps) => {
  const { color } = props;
  return (
    <footer className={cx(drawerFooterStyles({ color }), props.className)}>
      {props.children}
    </footer>
  );
};
