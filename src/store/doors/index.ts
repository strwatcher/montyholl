import { rand } from "../../utils/rand";
import { StoreModule } from "../module";

export interface DoorsState {
  items: Door[];
  count: number;
}

export type Door = {
  id: string;
  opened: boolean;
  content: "goat" | "car";
};

export class DoorsModule extends StoreModule<DoorsState> {
  initState(): DoorsState {
    return this.fillDoors(3);
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
}
