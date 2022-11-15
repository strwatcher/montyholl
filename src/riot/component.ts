export type CommonProps = {
  className?: string;
  onClick?: () => void;
};

export type Component<T extends CommonProps = CommonProps> = (
  props: T,
  ...children: HTMLElement[]
) => HTMLElement;
