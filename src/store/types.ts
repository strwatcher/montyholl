import { DoorsModule } from "./doors";

export const modules = {
  doors: DoorsModule,
};

export type IModules = typeof modules;

export type IStoreModules = {
  [P in keyof IModules]: InstanceType<IModules[P]>;
};

export type IState = {
  [P in keyof IStoreModules]: ReturnType<IStoreModules[P]["initState"]>;
};
