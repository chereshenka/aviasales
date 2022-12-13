export const filtered = (items, filters) => {
  console.log("filter in");
  const arr = [];
  if (filters.length === 0 || items === 0 || filters.includes("all")) {
    return items;
  }
  for (const element of items) {
    for (const key of element.segments) {
      for (const digit of filters) {

        key["stops"].length === Number(digit) && !arr.includes(element)
          ? arr.push(element)
          : false;
      }
    }
  }
  return arr;
};
