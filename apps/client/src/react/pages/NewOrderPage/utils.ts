export function getYearData(scope: number) {
  const currentYear = new Date().getFullYear();
  const yearsData: [{ id: number; value: string | number; text: string }] = [
    { id: 0, value: "", text: "Wybierz rocznik auta" },
  ];

  for (let i = currentYear; i > currentYear - scope; i -= 1) {
    yearsData.push({ id: i, value: i, text: String(i) });
  }

  return yearsData;
}

export type MakesDataType = { id: number; value: string; text: string }[];
