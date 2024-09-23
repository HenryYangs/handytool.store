export const getCurrentTool = (list, id) => {
  return list.find(item => item.id === id) || {
    text: '',
    description: '',
    category: '',
    favorite: false
  };
};
