import { Door } from "./components/door";
import { Layout } from "./components/layout";
import { CommonProps, Component } from "./riot/component";
import { Store } from "./store";

export type AppProps = {
  store: Store;
} & CommonProps;

export const App: Component<AppProps> = (props) => {
  const store = props.store;

  const callbacks = {
    openDoor: store.get("doors").openDoor.bind(store.get("doors")),
  };

  return Layout(
    {},
    ...store
      .getState()
      .doors.items.map((item) =>
        Door({ ...item, openDoor: callbacks.openDoor })
      )
  );
};
