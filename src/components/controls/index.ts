import { CommonProps, Component } from "../../riot/component";
import { Button } from "../../riot/components/button";
import { HorizontalLayout } from "../layouts/horizontal-layout";
import { NumberControl } from "../number-control";

export type ControlsProps = CommonProps & {
  setCount: (count: number) => void;
  count: number;
};

export const Controls: Component<ControlsProps> = (props) => {
  const callbacks = {
    increase: () => {
      if (props.count < 5) {
        props.setCount(props.count + 1);
      }
    },
    decrease: () => {
      if (props.count > 3) {
        props.setCount(props.count - 1);
      }
    },
    restart: () => {
      props.setCount(props.count);
    },
  };

  return HorizontalLayout(
    { theme: "gapped-centered-l" },
    NumberControl({
      increase: callbacks.increase,
      decrease: callbacks.decrease,
      value: props.count,
    }),
    Button({ text: "Начать заново", onClick: callbacks.restart, theme: "big" })
  );
};
