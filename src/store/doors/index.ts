import { rand } from "../../utils/rand";
import { StoreModule } from "../module";

export interface DoorsState {
  items: Door[];
  count: number;
  stage: "first" | "second" | "disabled";
}

export type Door = {
  id: string;
  opened: boolean;
  content: "goat" | "car";
};

export class DoorsModule extends StoreModule<DoorsState> {
  initState(): DoorsState {
    return {
      ...this.fillDoors(3),
      stage: "first",
    };
  }

  fillDoors(count: number) {
    let items: Door[] = [];
    const carPlace = rand(0, count);
    for (let i = 0; i < count; ++i) {
      items.push({
        id: `${i}`,
        opened: false,
        content: carPlace === i ? "car" : "goat",
      });
    }

    return { items, count };
  }

  setDoorsCount(count: number) {
    this.setState({
      ...this.getState(),
      ...this.fillDoors(count),
      count,
    });
  }

  openDoor(id: string) {
    const items = this.getState().items.map((item) =>
      item.id === id ? { ...item, opened: true } : item
    );

    this.setState({
      ...this.getState(),
      items,
    });
  }

  // openExtraDoors(id: string) {
  // const carDoor = this.getState().items.find((i) => i.content === "car");
  // const secondClosedDoor = carDoor!.id === id ?
  // const extraDoors = this.getState().items.filter(i => i.)
  // }
}
