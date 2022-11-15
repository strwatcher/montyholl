import { Door } from "./components/door";
import { HorizontalLayout } from "./components/layouts/horizontal-layout";
import { VerticalLayout } from "./components/layouts/vertical-layout";
import { CommonProps, Component } from "./riot/component";
import { Button } from "./riot/components/button";
import { Store } from "./store";

export type AppProps = {
  store: Store;
} & CommonProps;

export const App: Component<AppProps> = (props) => {
  const store = props.store;

  const callbacks = {
    openDoor: store.get("doors").openDoor.bind(store.get("doors")),
    addDoor: store.get("doors").setDoorsCount.bind(store.get("doors")),
  };

  return VerticalLayout(
    {},
    HorizontalLayout(
      {},
      ...store
        .getState()
        .doors.items.map((item) =>
          Door({ ...item, openDoor: callbacks.openDoor })
        )
    ),
    HorizontalLayout(
      { theme: { justify: "center" } },
      Button({
        text: "Добавить дверь",
        onClick: () => callbacks.addDoor(store.getState().doors.count + 1),
      })
    )
  );
};
