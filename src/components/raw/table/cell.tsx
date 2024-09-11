import { formatters, FormatterTypes } from "@/utils/formatters";
import { cx } from "@/utils/tailwind";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const tableCellStyles = tv({
  base: ["text-left p-2 whitespace-normal ease-linear transition-all"],
  variants: {
    color: {
      neutral: ["text-neutral-700"],
    },
    isClickable: {
      true: ["cursor-pointer hover:text-primary-500"],
    },
  },
  compoundVariants: [
    {
      color: "neutral",
      isClickable: true,
      className: ["text-neutral-700"],
    },
  ],
});

interface TableCellProps {
  color?: "neutral";
  className?: string;
  children?: ReactNode | string | number;
  onClick?: () => void;
  colSpan?: number;
  formatAs?: FormatterTypes;
  // eslint-disable-next-line no-unused-vars
  customFormat?: (value: any) => ReactNode;
}

export const TableCell = (props: TableCellProps) => {
  const { color } = props;

  if (props.formatAs && props.customFormat)
    throw new Error("Cannot use both formatAs and customFormat");

  return (
    <td
      colSpan={props.colSpan}
      className={cx(
        tableCellStyles({ color, isClickable: !!props.onClick }),
        props.className,
      )}
      onClick={props.onClick}
    >
      {props.formatAs && formatters[props.formatAs!](props.children as any)}
      {props.customFormat && props.customFormat(props.children as any)}
      {!props.formatAs && !props.customFormat && props.children}
    </td>
  );
};
