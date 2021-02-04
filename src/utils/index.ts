interface UtilsConfig {
  (id: string, obj: Array<object> | any): string;
}

const getLabelById: UtilsConfig = (id, obj) =>
  obj.find((item: any) => item.id === id).label;
const getPlaceholderById: UtilsConfig = (id, obj) =>
  obj.find((item: any) => item.id === id).placeholder;
const getRequiredById: UtilsConfig = (id, obj) =>
  obj.find((item: any) => item.id === id).isRequired;

const convertDateToCustom = (date: Date) => {
  // TODO: To parse a date, use DateJS library (see https://github.com/datejs/Datejs)
  const datePrototype = new Date(date);

  const day = datePrototype.getDate();
  const month = datePrototype.getMonth() + 1;
  const year = datePrototype.getFullYear();
  const hour = datePrototype.getHours();
  const minute = datePrototype.getMinutes();

  return (
    `${day > 9 ? day : `0${day}`}.` +
    `${month > 9 ? month : `0${month}`}.` +
    `${year}` +
    ", " +
    `${hour > 9 ? hour : `0${hour}`}` +
    `:${minute > 9 ? minute : `0${minute}`} (МСК)`
  );
};

export const utils = {
  getLabelById,
  getPlaceholderById,
  getRequiredById,
  convertDateToCustom,
};
