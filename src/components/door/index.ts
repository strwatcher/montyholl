import { CommonProps, Component } from "../../riot/component";
import { Div } from "../../riot/components/div";
import { loadSvg } from "../../riot/loadSvg";
import { Door as DoorModel } from "../../store/doors";

export type DoorProps = CommonProps &
  DoorModel & {
    openDoor: (id: string) => void;
  };

export const Door: Component<DoorProps> = (props) => {
  const content = document.createElement("h2");
  content.innerText = props.content;
  content.className = "door-content";

  const door = Div(
    {
      className: props.className ?? "door",
      onClick: () => props.openDoor(props.id),
    },
    content
  );

  loadSvg(
    props.opened ? "/door_opened.svg" : "/door_closed.svg",
    300,
    (dom: HTMLElement) => {
      door.appendChild(dom);
    }
  );

  return door;
};
