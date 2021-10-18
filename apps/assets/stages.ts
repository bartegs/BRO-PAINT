export type StageListItem = { [key: number]: { name: string; color: string } };

export const stageList: { [key: number]: StageListItem } = {
  0: {
    0: { name: "zlecenie złożone", color: "#000000" },
  },
  1: {
    0: { name: "oględzinny", color: "#8F7000" },
    1: { name: "mycie", color: "#CFD300" },
    2: { name: "demontaż elementów", color: "#6CC000" },
    3: { name: "zamówienie elementów", color: "#0F6D00" },
    4: { name: "naprawa elementów", color: "#008377" },
    5: { name: "montaż nowych elementów", color: "#08B0A1" },
  },
  2: {
    0: { name: "maskowanie", color: "#004D65" },
    1: { name: "wet-sanding", color: "#0060F0" },
    2: { name: "malowanie-pokład", color: "#7000FF" },
    3: { name: "malowanie-kolor", color: "#006580" },
    4: { name: "malowanie-bezbarwny", color: "#99BCFF" },
    5: { name: "wygrzewanie-lakieru", color: "#826EBD" },
  },
  3: {
    0: { name: "polerowanie", color: "#6F0032" },
    1: { name: "wet-sanding", color: "#8B00BC" },
    2: { name: "mycie", color: "#CD00D1" },
    3: { name: "oględziny", color: "#AE0000" },
  },
  4: {
    0: { name: "ukończone", color: "#930000" },
  },
};
