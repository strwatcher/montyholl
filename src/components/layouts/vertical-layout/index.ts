import { CommonProps, Component } from "../../../riot/component";
import { Div } from "../../../riot/components/div";
import { joinClasses } from "../../../utils/joinClasses";

export type VerticalLayoutProps = CommonProps & {
  theme?: "centered" | "gapped" | "column" | "app";
};
export const VerticalLayout: Component<VerticalLayoutProps> = (
  props,
  ...children
) => {
  const className = props.className ?? "Vlayout";
  const div = Div(
    {
      className: joinClasses(
        className,
        props.theme ? `${className}_${props.theme}` : ""
      ),
    },
    ...children
  );
  return div;
};
