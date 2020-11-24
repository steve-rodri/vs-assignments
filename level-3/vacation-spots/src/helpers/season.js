const season = () => {
  const now = new Date();
  const month = now.getMonth();
  const spring = month === 2 || month === 3 || month === 4;
  const summer = month === 5 || month === 6 || month === 7;
  const fall = month === 8 || month === 9 || month === 10;
  const winter = month === 11 || month === 0 || month === 1;
  if (spring) return "Spring";
  if (summer) return "Summer";
  if (fall) return "Fall";
  if (winter) return "Winter";
};

export default season();
