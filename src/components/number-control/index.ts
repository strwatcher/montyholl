import { CommonProps, Component } from "../../riot/component";
import { Button } from "../../riot/components/button";
import { Label } from "../label";
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
      theme: "big",
      text: "-",
      onClick: props.decrease,
    }),
    Label({ text: props.value.toString(), theme: "big" }),
    Button({
      theme: "big",
      text: "+",
      onClick: props.increase,
    })
  );
};
