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
      stage: "first",
    });
  }

  openDoor(id: string) {
    const stage = this.getState().stage;
    switch (stage) {
      case "first":
        this.openExtraDoors(id);
        break;
      case "second":
        this.openThisDoor(id);
        break;
      case "disabled":
        return;
    }
  }

  openThisDoor(id: string) {
    const items = this.getState().items.map((item) =>
      item.id === id ? { ...item, opened: true } : item
    );

    this.setState({
      ...this.getState(),
      items,
      stage: "disabled",
    });
  }

  openExtraDoors(id: string) {
    const carDoor = this.getState().items.find((i) => i.content === "car")!.id;
    const doorsWoutCar = this.getState().items.filter(
      (i) => i.content !== "car"
    );
    const secondClosedDoor =
      carDoor === id ? doorsWoutCar[rand(0, doorsWoutCar.length)].id : id;
    const finalDoors = this.getState().items.map((i) =>
      i.id !== carDoor && i.id !== secondClosedDoor ? { ...i, opened: true } : i
    );

    this.setState({
      ...this.getState(),
      items: finalDoors,
      stage: "second",
    });
  }
}
