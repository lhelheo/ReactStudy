import { tv } from "tailwind-variants";
import { InputText } from "./text";
import { InputNumber } from "./number";
import { InputEmail } from "./email";
import { InputPassword } from "./password";
import { InputTextarea } from "./textarea";
import { InputSelect } from "./select";
import { InputCheckbox } from "./checkbox";
import { InputDate } from "./date";
import { InputDatetime } from "./datetime";
import { InputTime } from "./time";
import { Label } from "./label";
import { InputFile } from "./file";

export const inputStyles = tv({
  base: [
    "w-full rounded-[6px] ease-linear transition-all",
    "disabled:cursor-not-allowed",
    "outline-none focus:outline-none",
  ],
  variants: {
    color: {
      primary: [
        "bg-transparent border-[1px] border-neutral-300 text-black",
        "hover:border-primary-500",
        "focus:border-primary-500",
        "placeholder:text-neutral-500",
      ],
      none: [
        "text-neutral-700 bg-transparent",
        "hover:text-primary-500",
        "focus:text-primary-500",
        "placeholder:text-neutral-500",
      ],
    },
    size: {
      sm: "text-sm px-[10px] py-[8px]",
      md: "text-base px-[14px] py-[10px]",
      lg: "text-lg px-[18px] py-[12px]",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "sm",
  },
});

export interface InputProps {
  id: string;
  name: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  className?: string;
  color?: "primary" | "none";
  size?: "sm" | "md" | "lg";
}

export const Input = {
  Text: InputText,
  Number: InputNumber,
  Email: InputEmail,
  Password: InputPassword,
  Textarea: InputTextarea,
  Select: InputSelect,
  Checkbox: InputCheckbox,
  Date: InputDate,
  Datetime: InputDatetime,
  Time: InputTime,
  File: InputFile,
  Label,
};
