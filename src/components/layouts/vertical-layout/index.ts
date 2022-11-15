import { CommonProps, Component } from "../../../riot/component";
import { Div } from "../../../riot/components/div";
import { LayoutProps } from "../types";

export type VerticalLayoutProps = CommonProps & LayoutProps;
export const VerticalLayout: Component<VerticalLayoutProps> = (
  props,
  ...children
) => {
  const div = Div({ className: props.className ?? "Vlayout" }, ...children);
  props.theme?.gap &&
    props.theme?.gapUnits &&
    div.style.setProperty("--gap", `${props.theme.gap}${props.theme.gapUnits}`);
  props.theme?.align && div.style.setProperty("--align", props.theme.align);
  props.theme?.justify &&
    div.style.setProperty("--justify", props.theme.justify);
  return div;
};
