export const getCurrentTool = (list, id) => {
  return list.find(item => item.id === id);
};
