import { Component } from "./component";

export const SVGComponent: Component<{
  path: string;
  size: number;
  className?: string;
}> = (props) => {
  const svg = document.createElement("div");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", props.path, false);
  xhr.overrideMimeType("image/svg+xml");
  xhr.onload = () => {
    const dom = xhr.responseXML!.documentElement;
    const ratio = dom.clientWidth / dom.clientHeight;
    dom.setAttribute("width", `${props.size}`);
    dom.setAttribute("height", `${props.size * ratio}`);
    svg.appendChild(dom);
  };

  xhr.send("");

  return svg;
};
