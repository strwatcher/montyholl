import { Controls } from "./components/controls";
import { Door } from "./components/door";
import { Label } from "./components/label";
import { HorizontalLayout } from "./components/layouts/horizontal-layout";
import { VerticalLayout } from "./components/layouts/vertical-layout";
import { Statistics } from "./components/statistics";
import { CommonProps, Component } from "./riot/component";
import { Store } from "./store";
import { Modes as Mode } from "./store/statistics";

export type AppProps = {
  store: Store;
} & CommonProps;

export const App: Component<AppProps> = (props) => {
  const store = props.store;

  const callbacks = {
    openDoor: (id: string) => {
      const result = store.get("doors").openDoor.bind(store.get("doors"))(id);
      if (!!result) {
        store.get("statistics").registerGame.bind(store.get("statistics"))(
          result,
          select.count.toString() as Mode
        );
        console.log(store.getState().statistics);
        if (result.win) {
          store.get("status").win.bind(store.get("status"))();
        } else {
          store.get("status").lose.bind(store.get("status"))();
        }
      }
    },
    setCount: (count: number) => {
      store.get("doors").setDoorsCount.bind(store.get("doors"))(count);
      store.get("status").reset.bind(store.get("status"))();
    },
  };

  const select = {
    items: store.getState().doors.items,
    count: store.getState().doors.count,
    status: store.getState().status.message,
    statistics: store.getState().statistics.data,
  };

  return VerticalLayout(
    { theme: "app" },
    HorizontalLayout(
      { theme: "full" },
      ...select.items.map((item) =>
        Door({
          ...item,
          openDoor: callbacks.openDoor,
          theme: item.opened ? "disabled" : undefined,
        })
      )
    ),

    Label({ theme: "h", text: select.status }),
    Controls({
      count: select.count,
      setCount: callbacks.setCount,
    }),
    Statistics({
      data: select.statistics[select.count.toString() as Mode],
    })
  );
};
