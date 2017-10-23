export const selectFortune = ({fortunes}, id) => {
  const fortune = fortunes[id] || {};
  return fortune;
};

export const selectAll = (fortunes) => {
  return Object.values(fortunes);
};
