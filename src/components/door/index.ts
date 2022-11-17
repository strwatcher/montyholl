import { CommonProps, Component } from "../../riot/component";
import { Div } from "../../riot/components/div";
import { loadSvg } from "../../riot/loadSvg";
import { SVG } from "../../riot/SVG";
import { Door as DoorModel } from "../../store/doors";
import { joinClasses } from "../../utils/joinClasses";

export type DoorProps = CommonProps &
  DoorModel & {
    openDoor: (id: string) => void;
    theme?: "disabled";
  };

export const Door: Component<DoorProps> = (props) => {
  const content = document.createElement("h2");
  content.innerText = props.content;
  content.className = "door-content";
  const className = props.className ?? "door";
  const door = Div(
    {
      className: joinClasses(
        className,
        props.theme ? `${className}_${props.theme}` : ""
      ),
      onClick: () => props.openDoor(props.id),
    },
    SVG({
      path: props.opened ? "/door_opened.svg" : "/door_closed.svg",
      size: 300,
    }),
    SVG({
      path: props.content === "car" ? "/car.svg" : "/goat.svg",
      size: props.content === "car" ? 125 : 100,
      className: "door-content",
    })
  );

  return door;
};
