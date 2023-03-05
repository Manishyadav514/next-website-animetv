import { Icon } from '@iconify-icon/react';

interface iconPropsType {
  icon: string; // https://icon-sets.iconify.design/ for finding icons
  width?: number;
  height?: number;
  flip?: "horizontal" | "vertical";
  rotate?: string | number;
}

export function CommonIcon(props:iconPropsType) {
  return (
    <Icon
      icon={props?.icon}
      height={props?.height || 24}
      width={props?.width || 24}
      flip={props?.flip}
      rotate={props?.rotate}
    />
  );
}
