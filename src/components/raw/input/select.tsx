import { ChangeEvent, ReactNode } from "react";
import { InputProps, inputStyles } from ".";
import { cx } from "@/utils/tailwind";

interface InputSelectProps extends InputProps {
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode;
}

export const InputSelect = (props: InputSelectProps) => {
  const { color, size } = props;

  return (
    <select
      id={props.id}
      name={props.name}
      required={props.required}
      disabled={props.disabled}
      className={cx(inputStyles({ color, size }), props.className)}
      onChange={props.onChange}
    >
      <option value={""}>{props.placeholder || "Selecione aqui"}</option>
      {props.children}
    </select>
  );
};
