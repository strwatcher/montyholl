import { CommonProps, Component } from "./component";
import { Div } from "./components/div";

export type SVGProps = CommonProps & {
  path: string;
  size: number;
};

export const SVG: Component<SVGProps> = (props) => {
  const container = Div({ className: props.className ?? "svg" });
  const xhr = new XMLHttpRequest();
  xhr.open("GET", props.path, false);
  xhr.overrideMimeType("image/svg+xml");
  xhr.onload = () => {
    const dom = xhr.responseXML!.documentElement;
    const ratio = dom.clientWidth / dom.clientHeight;
    dom.setAttribute("width", `${props.size}`);
    dom.setAttribute("height", `${props.size * ratio}`);
    container.appendChild(dom)
  };

  xhr.send("");
  return container
};
