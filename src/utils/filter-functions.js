export const filtered = (items, filters) => {
  const arr = [];
  if (filters.length === 0 || items === 0 || filters.includes("all")) {
    return items;
  }
  for (const element of items) {
    for (const key of element.segments) {
      for (const digit of filters) {
        key["stops"].length === Number(digit) ? arr.push(element) : false;
      }
    }
  }
  return arr;
};
