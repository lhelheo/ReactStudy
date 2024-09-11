import { AnchorLink } from "@/components/raw/anchor-link";
import { Callout } from "@/components/raw/callout";
//import { CheckCircleIcon } from "@heroicons/react/20/solid"; //TODO: Change the icon

interface FormSuccessProps {
  message?: string;
  redirect?: string;
}

export const FormSuccess = (props: FormSuccessProps) => {
  return (
    <Callout
      color="success"
      title="Sucesso ao enviar o formulário"
      icon={
        <>
          <p>i</p>
          {/* <CheckCircleIcon className="w-4 h-4" /> //TODO: Set the icon */}
        </>
      }
    >
      {!!props.message && <p className="text-justify">{props.message}</p>}
      {!!props.redirect && (
        <AnchorLink href={props.redirect} underline>
          Clique aqui para continuar
        </AnchorLink>
      )}
    </Callout>
  );
};
