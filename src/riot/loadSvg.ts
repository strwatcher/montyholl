export async function loadSvg(
  path: string,
  size: number,
  attach: (dom: HTMLElement) => void
) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", path, false);
  xhr.overrideMimeType("image/svg+xml");
  xhr.onload = () => {
    const dom = xhr.responseXML!.documentElement;
    const ratio = dom.clientWidth / dom.clientHeight;
    dom.setAttribute("width", `${size}`);
    dom.setAttribute("height", `${size * ratio}`);
    attach(dom);
  };

  xhr.send("");
}
