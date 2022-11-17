import { CommonProps, Component } from "../../../riot/component";
import { Div } from "../../../riot/components/div";
import { joinClasses } from "../../../utils/joinClasses";

export type HorizontalLayoutProps = CommonProps & {
  theme?: "gapped-centered" | "gapped-centered-l" | "full" | "row";
};

export const HorizontalLayout: Component<HorizontalLayoutProps> = (
  props,
  ...children
) => {
  const className = props.className ?? "Hlayout";
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
