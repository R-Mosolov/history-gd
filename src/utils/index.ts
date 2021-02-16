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
  // Set the initial epoch
  const dateClone = new Date("January 01, 1970 00:00:00 UTC");
  dateClone.setSeconds(Object(date).seconds);

  const day = dateClone.getDate();
  const month = dateClone.getMonth() + 1;
  const year = dateClone.getFullYear();
  const hour = dateClone.getHours();
  const minute = dateClone.getMinutes();

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
