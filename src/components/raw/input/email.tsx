import { ChangeEvent } from "react";
import { InputProps, inputStyles } from ".";
import { cx } from "@/utils/tailwind";

interface InputEmailProps extends InputProps {
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputEmail = (props: InputEmailProps) => {
  const { color, size } = props;

  return (
    <input
      type="email"
      id={props.id}
      name={props.name}
      placeholder={props.placeholder || "Digite o e-mail aqui..."}
      required={props.required}
      disabled={props.disabled}
      className={cx(inputStyles({ color, size }), props.className)}
      onChange={props.onChange}
    />
  );
};
