import { Card } from "@/components/raw/card";
import { Tooltip } from "@/components/raw/tooltip";
import { cx } from "@/utils/tailwind";
//import { LockClosedIcon } from "@heroicons/react/20/solid"; //TODO: Set icon

interface LockedCardProps {
  className?: string;
}

export const LockedCard = (props: LockedCardProps) => {
  return (
    <Card
      className={cx(
        "flex items-center justify-center min-h-[200px] h-auto",
        props.className,
      )}
      color="neutral"
    >
      <Tooltip content="Acesso bloqueado" color="warn">
        <p>Blocked</p>
        {/* <LockClosedIcon className="h-10 w-10 text-neutral-600 hover:text-warn-500" /> //TODO: Set Icon */}
      </Tooltip>
    </Card>
  );
};
