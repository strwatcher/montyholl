import { CommonProps, Component } from "../../riot/component";
import { SVGComponent } from "../../riot/svg-component";
import { Door as DoorModel } from "../../store/doors";

export type DoorProps = CommonProps &
  DoorModel & {
    openDoor: (id: string) => void;
  };

export const Door: Component<DoorProps> = (props) => {
  const door = document.createElement("div");
  door.addEventListener("click", () => props.openDoor(props.id));
  door.className = props.className ?? "door";

  const svg = SVGComponent({
    path: props.opened ? "/door_opened.svg" : "/door_closed.svg",
    size: 300,
  });

  const content = document.createElement("h2");
  content.innerText = props.content;
  content.className = "door-content";

  door.appendChild(svg);
  door.appendChild(content);

  return door;
};
