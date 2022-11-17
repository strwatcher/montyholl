import { joinClasses } from "../../utils/joinClasses";
import { CommonProps, Component } from "../component";

export type ButtonProps = CommonProps & { theme?: "big" };

export const Button: Component<ButtonProps> = (props) => {
  const button = document.createElement("button");
  const className = props.className ?? "Button";
  button.className = joinClasses(
    className,
    props.theme ? `${className}_${props.theme}` : ""
  );
  button.textContent = props.text ?? "";
  button.addEventListener("click", () => props.onClick && props.onClick());
  return button;
};
