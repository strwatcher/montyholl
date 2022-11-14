import { AppProps } from "../app";
import { Store } from "../store";
import { Component } from "./component";

export function render(app: Component<AppProps>, store: Store) {
  document
    .querySelector<HTMLDivElement>("#root")!
    .replaceChildren(app({ store }));
}
