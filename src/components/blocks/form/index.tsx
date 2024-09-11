import { Input } from "@/components/raw/input";
import { FormContainer } from "./container";
import { FormWrapper } from "./wrapper";
import { FormError } from "./error";
import { FormSuccess } from "./success";
import { FormSubmit } from "./submit";
import { FormReset } from "./reset";

export const Form = {
  Container: FormContainer,
  Wrapper: FormWrapper,
  Input,
  Error: FormError,
  Success: FormSuccess,
  Submit: FormSubmit,
  Reset: FormReset,
};
