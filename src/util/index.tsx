export const pxToRem = (num: string | number) => {
  const pxNum = Number(num);
  return `${pxNum / 75}rem`;
};
