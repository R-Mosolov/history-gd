interface UtilsConfig {
  (
    id: string,
    obj: Array<object> | any,
  ): string;
}

const getLabelById: UtilsConfig = (id, obj) => obj.find((item: any) => item.id === id).label;
const getPlaceholderById: UtilsConfig = (id, obj) => obj.find((item: any) => item.id === id).placeholder;
const getRequiredById: UtilsConfig = (id, obj) => obj.find((item: any) => item.id === id).isRequired;

export const utils = {
  getLabelById,
  getPlaceholderById,
  getRequiredById,
};
