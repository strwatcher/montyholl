import { percent } from "../../utils/percent";
import { GameInfo } from "../doors";
import { StoreModule } from "../module";

export type Modes = "3" | "4" | "5";

export interface Statistics {
  games: number;
  wins: number;
  winsPercent: string;

  looses: number;
  loosesPercent: string;

  changeGames: number;
  changeGamesPercent: string;
  notChangeGames: number;
  notChangeGamesPercent: string;

  changeWins: number;
  changeWinsPercent: string;
  notChangeWins: number;
  notChangeWinsPercent: string;

  changeLooses: number;
  changeLoosesPercent: string;
  notChangeLooses: number;
  notChangeLoosesPercent: string;
}

export interface StatisticsState {
  data: {
    [P in Modes]: Statistics
  };
}

export class StatisticsModule extends StoreModule<StatisticsState> {
  initState(): StatisticsState {
    const defaultStatistics = {
      games: 0,

      wins: 0,
      winsPercent: "0%",

      looses: 0,
      loosesPercent: "0%",

      changeGames: 0,
      changeGamesPercent: "0%",
      notChangeGames: 0,
      notChangeGamesPercent: "0%",

      changeWins: 0,
      changeWinsPercent: "0%",
      notChangeWins: 0,
      notChangeWinsPercent: "0%",

      changeLooses: 0,
      changeLoosesPercent: "0%",
      notChangeLooses: 0,
      notChangeLoosesPercent: "0%",
    };
    return {
      data: {
        "3": defaultStatistics,
        "4": defaultStatistics,
        "5": defaultStatistics,
      },
    };
  }

  registerGame(info: GameInfo, mode: "3" | "4" | "5") {
    const games = this.getState().data[mode].games + 1;
    const wins = this.getState().data[mode].wins + +info.win;
    const changeGames = this.getState().data[mode].changeGames + +info.change;
    const changeWins =
      this.getState().data[mode].changeWins + +(info.change && info.win);

    const winsPercent = percent(wins / games);
    const looses = games - wins;
    const loosesPercent = percent(looses / games);
    const changeGamesPercent = percent(changeGames / games);
    const notChangeGames = games - changeGames;
    const notChangeGamesPercent = percent(notChangeGames / games);
    const changeWinsPercent = percent(changeWins / wins);
    const notChangeWins = wins - changeWins;
    const notChangeWinsPercent = percent(notChangeWins / wins);
    const changeLooses = changeGames - changeWins;
    const changeLoosesPercent = percent(changeLooses / changeGames);
    const notChangeLooses = looses - changeLooses;
    const notChangeLoosesPercent = percent(notChangeLooses / looses);
    this.setState({
      data: {
        ...this.getState().data,
        [mode]: {
          games,
          wins,
          winsPercent,
          looses,
          loosesPercent,
          changeGames,
          changeGamesPercent,
          notChangeGames,
          notChangeGamesPercent,
          changeWins,
          changeWinsPercent,
          notChangeWins,
          notChangeWinsPercent,
          changeLooses,
          changeLoosesPercent,
          notChangeLooses,
          notChangeLoosesPercent,
        },
      },
    });
  }
}
