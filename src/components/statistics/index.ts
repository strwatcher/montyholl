import { CommonProps, Component } from "../../riot/component";
import { StatisticsState } from "../../store/statistics";
import { Label } from "../label";
import { HorizontalLayout } from "../layouts/horizontal-layout";
import { VerticalLayout } from "../layouts/vertical-layout";

export type StatisticsProps = CommonProps & {
  data: StatisticsState;
};

export const Statistics: Component<StatisticsProps> = (props) => {
  return HorizontalLayout(
    { theme: "row" },
    VerticalLayout(
      { theme: "column" },

      Label({ text: `Количество игр: ${props.data.games}` }),
      Label({ text: `Количество побед: ${props.data.wins}` }),
      Label({ text: `Количество проигрышей: ${props.data.looses}` }),
      Label({
        text: `Процент выигрыша: ${props.data.winsPercent}`,
      }),
      Label({
        text: `Процент проигрыша: ${props.data.loosesPercent}`,
      })
    ),
    VerticalLayout(
      { theme: "column" },
      Label({ text: `Игры со сменой двери: ${props.data.changeGames}` }),
      Label({ text: `Игры без смены двери: ${props.data.notChangeGames}` }),
      Label({
        text: `Процент игр со сменой двери: ${props.data.changeGamesPercent}`,
      }),
      Label({
        text: `Процент игр без смены двери: ${props.data.notChangeGamesPercent}`,
      })
    ),

    VerticalLayout(
      { theme: "column" },
      Label({ text: `Победы при смене двери: ${props.data.changeWins}` }),
      Label({ text: `Победы без смены двери: ${props.data.notChangeWins}` }),
      Label({
        text: `Процент побед при смене двери: ${props.data.changeWinsPercent}`,
      }),
      Label({
        text: `Процент побед без смены двери: ${props.data.notChangeWinsPercent}`,
      })
    ),
    VerticalLayout(
      { theme: "column" },
      Label({ text: `Проигрыши при смене двери: ${props.data.changeLooses}` }),
      Label({
        text: `Проигрыши без смены двери: ${props.data.notChangeLooses}`,
      }),
      Label({
        text: `Процент проигрышей при смене двери: ${props.data.changeLoosesPercent}`,
      }),
      Label({
        text: `Процент проигрышей без смены двери: ${props.data.notChangeLoosesPercent}`,
      })
    )
  );
};
