import { Store } from ".";
import { IState } from "./types";

export abstract class StoreModule<TState> {
  constructor(private store: Store, private config: { name: keyof IState }) {}

  abstract initState(): TState;

  getState(): TState {
    return this.store.getState()[this.config.name] as TState;
  }

  setState(newState: TState) {
    this.store.setState({
      ...this.store.getState(),
      [this.config.name]: newState as IState[keyof IState],
    });
  }
}
