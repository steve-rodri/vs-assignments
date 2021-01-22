export const formattedBigNum = num => {
  if (num >= 1000000000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "P";
  } else if (num >= 1000000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "T";
  } else if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  } else if (isNaN(num)) {
    return "N/A";
  } else {
    return num;
  }
};

export const formattedNum = num => {
  let tmp = num;
  const places = ((num.length - 1) % 3) + 1;
  let str = `${tmp.slice(0, places)}.${tmp.slice(places)}`;
  const roundedNum = parseFloat(str).toFixed(1);
  if (num.length > 15) return `${roundedNum}P`;
  if (num.length > 12) return `${roundedNum}T`;
  if (num.length > 9) return `${roundedNum}B`;
  if (num.length > 6) return `${roundedNum}M`;
  if (num.length > 3) return `${roundedNum}K`;
  return num;
};

export const numWithCommas = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
