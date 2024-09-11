import { cx } from "@/utils/tailwind";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const cardStyles = tv({
  base: ["flex flex-col w-full h-auto py-2 px-2.5 rounded-[6px]"],
  variants: {
    color: {
      white: ["bg-white border border-neutral-300"],
      neutral: ["bg-neutral-100 border border-neutral-300"],
    },
  },
  defaultVariants: {
    color: "white",
  },
});

interface CardProps {
  className?: string;
  color?: "white" | "neutral";
  children: ReactNode;
}

export const Card = (props: CardProps) => {
  const { color } = props;

  return (
    <div className={cx(cardStyles({ color }), props.className)}>
      {props.children}
    </div>
  );
};
