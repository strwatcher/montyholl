export type LayoutProps = {
  theme?: {
    align?: "center" | "start" | "end";
    justify?: "space-between" | "space-around" | "center" | "start" | "end";
    gap?: number;
    gapUnits?: "px" | "%" | "vh" | "vw";
  };
};
