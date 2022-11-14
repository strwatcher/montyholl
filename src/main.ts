import "./style.css";
import { App } from "./app";
import { Store } from "./store";
import { render } from "./riot/render";

const store = new Store();

store.subscribe(() => {
  render(App, store);
});

render(App, store);
