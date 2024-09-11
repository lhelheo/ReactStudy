import { ChangeEvent } from "react";
import { InputProps, inputStyles } from ".";
import { cx } from "@/utils/tailwind";

interface InputPasswordProps extends InputProps {
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputPassword = (props: InputPasswordProps) => {
  const { color, size } = props;

  return (
    <input
      type="password"
      id={props.id}
      name={props.name}
      placeholder={props.placeholder || "Digite a senha aqui..."}
      required={props.required}
      disabled={props.disabled}
      className={cx(inputStyles({ color, size }), props.className)}
      onChange={props.onChange}
    />
  );
};
