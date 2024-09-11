import { cx } from "@/utils/tailwind";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const tableRowStyles = tv({
  base: ["px-4 border-b-[1px] text-sm"],
  variants: {
    color: {
      primary: ["bg-white text-neutral-700 border-neutral-200"],
    },
    isClickable: {
      true: ["cursor-pointer ease-linear transition-all"],
    },
  },
  compoundVariants: [
    {
      color: "primary",
      isClickable: true,
      className: "hover:text-primary-500",
    },
  ],
  defaultVariants: {
    color: "primary",
  },
});

interface TableRowProps {
  color?: "primary";
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const TableRow = (props: TableRowProps) => {
  const { color } = props;

  return (
    <tr
      className={cx(
        tableRowStyles({ color, isClickable: !!props.onClick }),
        props.className,
      )}
      onClick={props.onClick}
    >
      {props.children}
    </tr>
  );
};
