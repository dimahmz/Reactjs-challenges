const hexchars: string = "0123456789ABCDEF";

export default function generateColorsGenerator(colorsNbr: number): {
  $colors: string[];
  $correctColor: string;
} {
  const $colors: string[] = [];

  for (let i = 0; i < colorsNbr; i++) {
    $colors[i] = `#${new Array(6)
      .fill("")
      .map(() => hexchars[Math.floor(Math.random() * hexchars.length)])
      .join("")}`;
  }

  const $correctColor = $colors[Math.floor(Math.random() * colorsNbr)];
  return {
    $colors,
    $correctColor,
  };
}
