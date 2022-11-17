import { GameInfo } from "../doors";
import { StoreModule } from "../module";

export interface StatisticsState {
  games: number;
  wins: number;
  looses: number;
  changeGames: number;
  notChangeGames: number;

  changeWins: number;
  notChangeWins: number;

  changeLooses: number;
  notChangeLooses: number;
}

export class StatisticsModule extends StoreModule<StatisticsState> {
  initState(): StatisticsState {
    return {
      games: 0,
      wins: 0,
      looses: 0,
      changeGames: 0,
      notChangeGames: 0,
      changeWins: 0,
      notChangeWins: 0,
      changeLooses: 0,
      notChangeLooses: 0,
    };
  }

  registerGame(info: GameInfo) {
    const games = this.getState().games + 1;
    const wins = this.getState().wins + +info.win;
    const looses = games - wins;
    const changeGames = this.getState().changeGames + +info.change;
    const notChangeGames = games - changeGames;
    const changeWins = this.getState().changeWins + +(info.change && info.win);
    const notChangeWins = wins - changeWins;
    const changeLooses = changeGames - changeWins;
    const notChangeLooses = looses - changeLooses;
    this.setState({
      games,
      wins,
      looses,
      changeGames,
      notChangeGames,
      changeWins,
      notChangeWins,
      changeLooses,
      notChangeLooses,
    });
  }
}
