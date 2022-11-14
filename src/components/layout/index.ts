import { CommonProps, Component } from "../../riot/component";

export type LayoutProps = CommonProps & { children: HTMLElement[] };
export const Layout: Component<LayoutProps> = (props) => {
  const layout = document.createElement("div");
  layout.className = "layout";

  props.children.forEach((c) => layout.appendChild(c));

  return layout;
};
