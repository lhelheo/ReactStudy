import { Card } from "@/components/raw/card";
import { Tooltip } from "@/components/raw/tooltip";
import { cx } from "@/utils/tailwind";
import { ElementType } from "react";

interface BuildingCardProps {
  className?: string;
  icon?: ElementType;
}

export const BuildingCard = (props: BuildingCardProps) => {
  return (
    <Card
      className={cx(
        "flex items-center justify-center min-h-[200px] h-auto",
        props.className,
      )}
      color="neutral"
    >
      <Tooltip description="Funcionalidade em desenvolvimento" color="primary">
        {props.icon ? (
          <props.icon className="h-10 w-10 text-gray-extradark hover:text-primary" />
        ) : (
          <p>Em desenvolvimento</p>
        )}
      </Tooltip>
    </Card>
  );
};
