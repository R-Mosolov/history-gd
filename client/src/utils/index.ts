interface UtilsConfig {
  (manuscriptId: string, obj: Array<object> | any, isType?: boolean): string;
}

const getLabelById: UtilsConfig = (id, obj, isType = true) =>
  obj.find((item: any) => item[isType ? 'typeId' : 'id'] === id)[
    isType ? 'typeLabel' : 'label'
  ];
const getPlaceholderById: UtilsConfig = (id, obj) =>
  obj.find((item: any) => item.id === id).placeholder;
const getRequiredById: UtilsConfig = (id, obj) =>
  obj.find((item: any) => item.id === id).isRequired;
const getIdByLabel: UtilsConfig = (typeLabel, obj) =>
  obj.find((item: any) => item.typeLabel === typeLabel).typeId;

const convertDateToCustom = (date: Date) => {
  if (typeof date === 'string') {
    // Set the initial epoch
    const parsedDate = Date.parse(date);
    const dateClone = new Date(parsedDate);

    const day = dateClone.getDate();
    const month = dateClone.getMonth() + 1;
    const year = dateClone.getFullYear();
    const hour = dateClone.getHours();
    const minute = dateClone.getMinutes();

    return (
      `${day > 9 ? day : `0${day}`}.` +
      `${month > 9 ? month : `0${month}`}.` +
      `${year}` +
      ', ' +
      `${hour > 9 ? hour : `0${hour}`}` +
      `:${minute > 9 ? minute : `0${minute}`} (МСК)`
    );
  } else {
    // Set the initial epoch
    const dateClone = new Date('January 01, 1970 00:00:00 UTC');
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
      ', ' +
      `${hour > 9 ? hour : `0${hour}`}` +
      `:${minute > 9 ? minute : `0${minute}`} (МСК)`
    );
  }
};

export const utils = {
  getLabelById,
  getPlaceholderById,
  getRequiredById,
  getIdByLabel,
  convertDateToCustom,
};
