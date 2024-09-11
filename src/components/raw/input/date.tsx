import { ChangeEvent } from "react";
import { InputProps, inputStyles } from ".";
import { cx } from "@/utils/tailwind";

interface InputDateProps extends InputProps {
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputDate = (props: InputDateProps) => {
  const { color, size } = props;

  return (
    <input
      type="date"
      id={props.id}
      name={props.name}
      required={props.required}
      disabled={props.disabled}
      className={cx(inputStyles({ color, size }), props.className)}
      onChange={props.onChange}
    />
  );
};
