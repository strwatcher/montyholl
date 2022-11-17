import { DoorsModule } from "./doors";
import { GameStatusModule } from "./game-status";
import { StatisticsModule } from "./statistics";

export const modules = {
  doors: DoorsModule,
  statistics: StatisticsModule,
  status: GameStatusModule,
};

export type IModules = typeof modules;

export type IStoreModules = {
  [P in keyof IModules]: InstanceType<IModules[P]>;
};

export type IState = {
  [P in keyof IStoreModules]: ReturnType<IStoreModules[P]["initState"]>;
};
