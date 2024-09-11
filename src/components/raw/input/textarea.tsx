import { ChangeEvent } from "react";
import { InputProps, inputStyles } from ".";
import { cx } from "@/utils/tailwind";

interface InputTextareaProps extends InputProps {
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const InputTextarea = (props: InputTextareaProps) => {
  const { color, size } = props;

  return (
    <textarea
      id={props.id}
      name={props.name}
      placeholder={props.placeholder || "Digite o texto aqui..."}
      required={props.required}
      disabled={props.disabled}
      className={cx(inputStyles({ color, size }), props.className)}
      onChange={props.onChange}
    ></textarea>
  );
};
