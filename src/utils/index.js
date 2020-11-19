exports.__esModule = true;
exports.utils = void 0;
const getLabelById = function (id, obj) { return obj.find((item) => item.id === id).label; };
const getPlaceholderById = function (id, obj) { return obj.find((item) => item.id === id).placeholder; };
const getRequiredById = function (id, obj) { return obj.find((item) => item.id === id).isRequired; };
exports.utils = {
  getLabelById,
  getPlaceholderById,
  getRequiredById,
};
