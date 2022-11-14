import { Door } from "./components/door";
import { Layout } from "./components/layout";
import { CommonProps, Component } from "./riot/component";
import { Store } from "./store";

export type AppProps = {
  store: Store;
} & CommonProps;

export const App: Component<AppProps> = (props) => {
  const app = document.createElement("div");

  const store = props.store;

  const callbacks = {
    openDoor: store.get("doors").openDoor.bind(store.get("doors")),
  };

  console.log("rendered");
  console.log(store.getState().doors);
  const layout = Layout({
    children: store
      .getState()
      .doors.items.map((item) =>
        Door({ ...item, openDoor: callbacks.openDoor })
      ),
  });

  app.appendChild(layout);

  return app;
};
