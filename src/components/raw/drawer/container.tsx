"use client";
import { ReactNode, useState } from "react";
import { tv } from "tailwind-variants";
import { cx } from "@/utils/tailwind";

const drawerContainerStyle = tv({
  base: [
    "p-4 max-w-md m-2 rounded-md flex flex-col justify-start h-full",
    "fixed inset-y-0 right-0 z-20",
  ],
  variants: {
    color: {
      primary: "bg-white text-black",
      secondary: "bg-black text-white",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

interface DrawerContainerProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
  color?: "primary" | "secondary";
}

export const DrawerContainer = (props: DrawerContainerProps) => {
  const { color } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const showMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div onClick={showMenu}>{props.trigger}</div>
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={showMenu}
          />
          <div className={cx(drawerContainerStyle({ color }), props.className)}>
            {props.children}
          </div>
        </>
      )}
    </>
  );
};
