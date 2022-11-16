export type CommonProps = {
  className?: string;
  onClick?: () => void;
  text?: string;
};

export type Component<T extends CommonProps = CommonProps> = (
  props: T,
  ...children: HTMLElement[]
) => HTMLElement;
