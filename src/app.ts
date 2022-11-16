import { Controls } from "./components/controls";
import { Door } from "./components/door";
import { HorizontalLayout } from "./components/layouts/horizontal-layout";
import { VerticalLayout } from "./components/layouts/vertical-layout";
import { NumberControl } from "./components/number-control";
import { CommonProps, Component } from "./riot/component";
import { Store } from "./store";

export type AppProps = {
  store: Store;
} & CommonProps;

export const App: Component<AppProps> = (props) => {
  const store = props.store;

  const callbacks = {
    openDoor: store.get("doors").openDoor.bind(store.get("doors")),
    setCount: store.get("doors").setDoorsCount.bind(store.get("doors")),
  };

  const select = {
    items: store.getState().doors.items,
    count: store.getState().doors.count,
  };

  return VerticalLayout(
    {},
    HorizontalLayout(
      { theme: "full" },
      ...select.items.map((item) =>
        Door({ ...item, openDoor: callbacks.openDoor })
      )
    ),
    Controls({
      count: select.count,
      setCount: callbacks.setCount,
    })
  );
};
