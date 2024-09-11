import { cx } from "@/utils/tailwind";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const dividerStyles = tv({
  base: ["h-[1px] w-full"],
  variants: {
    color: {
      neutral: ["bg-neutral-300"],
    },
  },
  defaultVariants: {
    color: "neutral",
  },
});

interface DividerProps {
  className?: string;
  color?: "neutral";
  children?: ReactNode;
}

export const Divider = (props: DividerProps) => {
  const { color } = props;

  return (
    <>
      {!props.children && (
        <div className={cx(dividerStyles({ color }), props.className)} />
      )}
      {props.children && (
        <div className="flex items-center justify-between w-full my-6 gap-4">
          <div className={cx(dividerStyles({ color }), props.className)} />
          <div className="w-auto">{props.children}</div>
          <div className={cx(dividerStyles({ color }), props.className)} />
        </div>
      )}
    </>
  );
};
