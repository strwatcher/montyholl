import { StoreModule } from "../module";

export interface GameStatusState {
  message: "Вы выиграли!" | "Вы проиграли!" | "";
}

export class GameStatusModule extends StoreModule<GameStatusState> {
  initState(): GameStatusState {
    return {
      message: "",
    };
  }

  win() {
    this.setState({
      message: "Вы выиграли!",
    });
  }

  lose() {
    this.setState({
      message: "Вы проиграли!",
    });
  }

  reset() {
    this.setState({
      message: "",
    });
  }
}
