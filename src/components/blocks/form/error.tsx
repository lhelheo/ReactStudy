import { Callout } from "@/components/raw/callout";
import { Tooltip } from "@/components/raw/tooltip";
//import { InformationCircleIcon } from "@heroicons/react/20/solid"; //TODO: Change the icon
import Link from "next/link";

interface FormErrorProps {
  message: string;
}

export const FormError = (props: FormErrorProps) => {
  return (
    <Callout
      color="danger"
      title="Um erro ocorreu, detalhes abaixo"
      icon={
        <Link href={"/help"}>
          <Tooltip
            color="danger"
            content="Se o erro persistir, entre em contato com o suporte clicando no ícone!"
          >
            <p>i</p>
            {/* <InformationCircleIcon className="w-4 h-4 animate-pulse hover:animate-none hover:scale-105 ease-linear transition-all" /> //TODO: Set the icon */}
          </Tooltip>
        </Link>
      }
    >
      <p className="text-justify">{props.message}</p>
    </Callout>
  );
};
