import { CommonProps, Component } from "../component";

export const Div: Component<CommonProps> = (props, ...children) => {
  const div = document.createElement("div");
  div.className = props.className ?? "";
  div.addEventListener("click", () => props.onClick && props.onClick());
  children.forEach((ch) => div.appendChild(ch));
  return div;
};
