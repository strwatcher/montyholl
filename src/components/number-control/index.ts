import { CommonProps, Component } from "../../riot/component";
import { Button } from "../../riot/components/button";
import { Div } from "../../riot/components/div";
import { HorizontalLayout } from "../layouts/horizontal-layout";

export type NumberControlProps = CommonProps & {
  increase: () => void;
  decrease: () => void;
  value: number;
};

export const NumberControl: Component<NumberControlProps> = (props) => {
  return HorizontalLayout(
    { theme: "gapped-centered" },
    Button({
      text: "-",
      onClick: props.decrease,
    }),
    Div({ text: props.value.toString() }),
    Button({
      text: "+",
      onClick: props.increase,
    })
  );
};
