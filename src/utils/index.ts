interface UtilsConfig {
  (manuscriptId: string, obj: Array<object> | any): string;
}

const getLabelById: UtilsConfig = (typeId, obj) =>
  obj.find((item: any) => item.typeId === typeId).typeLabel;
const getPlaceholderById: UtilsConfig = (typeId, obj) =>
  obj.find((item: any) => item.typeId === typeId).placeholder;
const getRequiredById: UtilsConfig = (typeId, obj) =>
  obj.find((item: any) => item.typeId === typeId).isRequired;
const getIdByLabel: UtilsConfig = (typeLabel, obj) =>
  obj.find((item: any) => item.typeLabel === typeLabel).typeId;

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
  getIdByLabel,
  convertDateToCustom,
};
