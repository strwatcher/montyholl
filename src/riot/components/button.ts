import { CommonProps, Component } from "../component";

export type ButtonProps = CommonProps & { text: string };

export const Button: Component<ButtonProps> = (props) => {
  const button = document.createElement("button");
  button.className = props.className ?? "";
  button.textContent = props.text;
  button.addEventListener("click", () => props.onClick && props.onClick());
  return button;
};
