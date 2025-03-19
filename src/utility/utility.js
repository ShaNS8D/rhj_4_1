function converter(value) {
  const red = parseInt(value.slice(1, 3), 16);
  const green = parseInt(value.slice(3, 5), 16);
  const blue = parseInt(value.slice(5), 16);

  return `rgb(${red},${green},${blue})`;
}
export { converter };