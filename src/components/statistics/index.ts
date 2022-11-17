import { CommonProps, Component } from "../../riot/component";
import { Statistics as StatisticsModel } from "../../store/statistics";
import { Label } from "../label";
import { HorizontalLayout } from "../layouts/horizontal-layout";
import { VerticalLayout } from "../layouts/vertical-layout";

export type StatisticsProps = CommonProps & {
  data: StatisticsModel;
};

export const Statistics: Component<StatisticsProps> = (props) => {
  return HorizontalLayout(
    { theme: "row" },
    VerticalLayout(
      { theme: "column" },

      Label({ text: `Количество игр: ${props.data.games}`, theme: "big" }),
      Label({ text: `Количество побед: ${props.data.wins}`, theme: "big" }),
      Label({ text: `Количество проигрышей: ${props.data.looses}`, theme: "big" }),
      Label({
        text: `Процент выигрыша: ${props.data.winsPercent}`, theme: "big",
      }),
      Label({
        text: `Процент проигрыша: ${props.data.loosesPercent}`, theme: "big"
      })
    ),
    VerticalLayout(
      { theme: "column" },
      Label({ text: `Игры со сменой двери: ${props.data.changeGames}`, theme: "big" }),
      Label({ text: `Игры без смены двери: ${props.data.notChangeGames}`, theme: "big" }),
      Label({
        text: `Процент игр со сменой двери: ${props.data.changeGamesPercent}`, theme: "big"
      }),
      Label({
        text: `Процент игр без смены двери: ${props.data.notChangeGamesPercent}`, theme: "big"
      })
    ),

    VerticalLayout(
      { theme: "column" },
      Label({ text: `Победы при смене двери: ${props.data.changeWins}`, theme: "big" }),
      Label({ text: `Победы без смены двери: ${props.data.notChangeWins}`, theme: "big" }),
      Label({
        text: `Процент побед при смене двери: ${props.data.changeWinsPercent}`, theme: "big"
      }),
      Label({
        text: `Процент побед без смены двери: ${props.data.notChangeWinsPercent}`, theme: "big"
      })
    ),
    VerticalLayout(
      { theme: "column" },
      Label({ text: `Проигрыши при смене двери: ${props.data.changeLooses}`, theme: "big" }),
      Label({
        text: `Проигрыши без смены двери: ${props.data.notChangeLooses}`, theme: "big"
      }),
      Label({
        text: `Процент проигрышей при смене двери: ${props.data.changeLoosesPercent}`, theme: "big"
      }),
      Label({
        text: `Процент проигрышей без смены двери: ${props.data.notChangeLoosesPercent}`, theme: "big"
      })
    )
  );
};
