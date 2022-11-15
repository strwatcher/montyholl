import { CommonProps, Component } from "../../riot/component";
import { Div } from "../../riot/components/div";

export type LayoutProps = CommonProps;
export const Layout: Component<LayoutProps> = (props, ...children) => {
  return Div({ className: props.className ?? "layout" }, ...children);
};
