import { IModules, IState, IStoreModules, modules } from "./types";

export class Store {
  private state: IState;
  private modules: IStoreModules;
  private listeners: Function[];

  constructor() {
    this.listeners = [];
    const tmpModules: any = {};
    const tmpState: any = {};

    for (const name of Object.keys(modules)) {
      const castedName = name as keyof IModules;
      tmpModules[name] = new modules[castedName](this, { name: castedName });
      tmpState[name] = tmpModules[castedName].initState();
    }

    this.modules = tmpModules;
    this.state = tmpState;
  }

  get<T extends keyof IStoreModules>(name: T): IStoreModules[T] {
    return this.modules[name];
  }

  getState(): IState {
    return this.state;
  }

  setState(newState: IState) {
    this.state = newState;

    for (const listener of this.listeners) {
      listener();
    }
  }

  subscribe(callback: Function): Function {
    this.listeners.push(callback);

    return () => {
      this.listeners = this.listeners.filter((item) => item !== callback);
    };
  }
}
