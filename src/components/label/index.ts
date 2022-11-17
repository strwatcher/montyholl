import { CommonProps, Component } from "../../riot/component";
import { Div } from "../../riot/components/div";
import { joinClasses } from "../../utils/joinClasses";

export type LabelProps = CommonProps & {
  theme?: "big" | "h";
};

export const Label: Component<LabelProps> = (props) => {
  const className = props.className ?? "Label";
  return Div({
    className: joinClasses(
      className,
      props.theme ? `${className}_${props.theme}` : ""
    ),
    text: props.text,
  });
};
