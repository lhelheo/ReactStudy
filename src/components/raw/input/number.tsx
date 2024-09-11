import { cx } from "@/utils/tailwind";
import { InputProps, inputStyles } from ".";
import { ChangeEvent } from "react";

interface InputNumberProps extends InputProps {
  value?: number;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputNumber = (props: InputNumberProps) => {
  const { color, size } = props;

  return (
    <input
      type="number"
      id={props.id}
      name={props.name}
      placeholder={props.placeholder || "Digite o número aqui..."}
      required={props.required}
      disabled={props.disabled}
      className={cx(inputStyles({ color, size }), props.className)}
      onChange={props.onChange}
      // set unlimited step for decimal numbers
      step="0.000001"
    />
  );
};
