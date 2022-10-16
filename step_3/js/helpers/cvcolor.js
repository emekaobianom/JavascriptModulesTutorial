import { getRandomOption } from "/js/shared/random.js";

export function getRandomCvColor() {
  const cvColor = [
    "lightgreen",
    "yellow",
    "skyblue",
    "pink",
    "orange",
    "white",
  ];
  return cvColor[getRandomOption(cvColor.length - 1)];
}
