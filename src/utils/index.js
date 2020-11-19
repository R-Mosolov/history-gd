const getLabelById = (id, obj) => obj.find((item) => item.id === id).label;
const getPlaceholderById = (id, obj) => obj.find((item) => item.id === id).placeholder;
const getRequiredById = (id, obj) => obj.find((item) => item.id === id).isRequired;

export const utils = {
  getLabelById,
  getPlaceholderById,
  getRequiredById,
};
