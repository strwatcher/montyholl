import { CommonProps, Component } from "../../../riot/component";
import { Div } from "../../../riot/components/div";
import { LayoutProps } from "../types";

export type HorizontalLayoutProps = CommonProps & LayoutProps;
export const HorizontalLayout: Component<HorizontalLayoutProps> = (
  props,
  ...children
) => {
  const div = Div({ className: props.className ?? "Hlayout" }, ...children);
  props.theme?.gap &&
    props.theme.gapUnits &&
    div.style.setProperty("--gap", `${props.theme.gap}${props.theme.gapUnits}`);
  props.theme?.align && div.style.setProperty("--align", props.theme.align);
  props.theme?.justify &&
    div.style.setProperty("--justify", props.theme.justify);
  return div;
};
