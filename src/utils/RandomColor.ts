const RandomColor = () => {
  let color = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  if (color == "#fff") {
    color = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  }
  return color;
};
export default RandomColor;
