import { CommonProps, Component } from "../component";

export type DivProps = CommonProps;

export const Div: Component = (props, ...children) => {
  const div = document.createElement("div");
  div.className = props.className ?? "";
  div.textContent = props.text ?? "";
  div.addEventListener("click", () => props.onClick && props.onClick());
  children.forEach((ch) => div.appendChild(ch));
  return div;
};
