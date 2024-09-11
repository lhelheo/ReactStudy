import { cx } from "@/utils/tailwind";
import { InputProps, inputStyles } from ".";
import { tv } from "tailwind-variants";
import { ChangeEvent } from "react";

export const inputCheckboxStyles = tv({
  base: [
    "w-fit rounded-[6px] ease-linear transition-all cursor-pointer",
    "outline-none focus:outline-none",
  ],
  variants: {
    color: {
      primary: [
        "accent-primary-500 border-neutral-300 bg-white",
        "hover:border-primary-500 hover:bg-neutral-100",
        "focus:border-primary-500 focus:bg-neutral-100",
      ],
    },
  },
});

interface InputCheckboxProps extends InputProps {
  checked?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  color?: "primary";
  /* no use of this props, but needs to mantain here for storybook */
  size?: never;
}

export const InputCheckbox = (props: InputCheckboxProps) => {
  const { color } = props;

  return (
    <input
      type="checkbox"
      id={props.id}
      name={props.name}
      checked={props.checked}
      required={props.required}
      disabled={props.disabled}
      className={cx(
        inputStyles({ color }),
        inputCheckboxStyles({ color }),
        props.className,
      )}
      onChange={props.onChange}
    />
  );
};
