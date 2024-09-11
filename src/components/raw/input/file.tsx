import { cx } from "@/utils/tailwind";
import { InputProps, inputStyles } from ".";
import { tv } from "tailwind-variants";
import { ChangeEvent } from "react";

const inputFileStyles = tv({
  base: [
    "file:rounded-l-[6px] file:border-0 file:ease-linear file:transition-all file:cursor-pointer",
    "disabled:file:cursor-not-allowed",
  ],
  variants: {
    color: {
      primary: [
        "text-neutral-700",
        "hover:text-primary-500",
        "file:text-neutral-600 file:bg-neutral-200 file:border-neutral-300",
        "hover:file:border-primary-500 hover:file:bg-primary-500 hover:file:text-white hover:file:cursor-pointer",
      ],
      none: [
        "text-neutral-700",
        "hover:text-primary-500",
        "file:text-neutral-600 file:bg-neutral-200 file:border-neutral-300",
        "hover:file:border-primary-500 hover:file:bg-primary-500 hover:file:text-white hover:file:cursor-pointer",
      ],
    },
    size: {
      sm: "file:text-xs file:px-[10px] file:py-[12px]",
      md: "file:text-sm file:px-[14px] file:py-[14px]",
      lg: "file:text-base file:px-[18px] file:py-[16px]",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
});

interface InputFileProps extends InputProps {
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputFile = (props: InputFileProps) => {
  const { color, size } = props;

  return (
    <input
      type="file"
      id={props.id}
      name={props.name}
      required={props.required}
      disabled={props.disabled}
      className={cx(
        inputStyles({ color, size }),
        inputFileStyles({ color, size }),
        props.className,
      )}
      onChange={props.onChange}
    />
  );
};
