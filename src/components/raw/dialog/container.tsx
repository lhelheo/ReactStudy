import { cx } from "@/utils/tailwind";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const dialogContainerStyles = tv({
  base: [
    "fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto",
    "rounded-[6px] p-6 shadow-lg border",
    "h-auto max-h-[85%]",
  ],
  variants: {
    color: {
      primary: ["bg-white text-neutral-700 border-gray-200"],
      secondary: ["bg-neutral-100 text-neutral-700 border-neutral-200"],
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

interface DialogContainerProps {
  color?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
}

export const DialogContainer = (props: DialogContainerProps) => {
  const { color } = props;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90">
      <div className={cx(dialogContainerStyles({ color }), props.className)}>
        {props.children}
      </div>
    </div>
  );
};
