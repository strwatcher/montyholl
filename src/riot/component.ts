export type CommonProps = {
  className?: string;
};

export type Component<T extends CommonProps = CommonProps> = (
  props: T,
  ...children: Component<any>[]
) => HTMLElement;
