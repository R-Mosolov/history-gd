import alertTexts from '../data/alert-texts.json';
import LETTERS from '../data/languages/english-alphabet.json';

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

const findDebugText = (alertId: string) => {
  return `CUSTOM_ERROR: ${
    alertTexts.filter((item) => item.id === alertId)[0].textForDebug
  }`;
};

const findAlertTitle = (alertId: string) => {
  return alertTexts.filter((item) => item.id === alertId)[0].textForUser.title;
};

const findAlertContent = (alertId: string) => {
  const unfinishedAlertContent = alertTexts.filter(
    (item) => item.id === alertId
  )[0].textForUser.content;
  const { fact, solution } = unfinishedAlertContent;
  const alertContent = solution ? `${fact}. ${solution}.` : `${fact}.`;

  return alertContent;
};

const findAlertActions = (alertId: string) => {
  return alertTexts.filter((item) => item.id === alertId)[0].textForUser
    .actions;
};

/**
 * @returns an unique value to set it for an HTML element ID or key
 * in the following proportions:
 * 1 - 26 [a-z]
 * 2 - 10 [0-9]
 * 3 - 26 [a-z]
 * 4 - 10 [0-9]
 * 5 - 26 [a-z]
 * The variability of getting non-unique value: 1 / 1.757.600
 */
const addID = () => {
  const DIGITS: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const ENGLISH_LETTERS_NUMBER: number = 26;
  const DIGITS_NUMBER: number = 10;
  const MAX_ID_LENGTH: number = 5;
  let result: string = '';
  let idx: number = 0;

  for (let i = 0; i < MAX_ID_LENGTH; i++) {
    if (i === 0 || i === 2 || i === 4) {
      idx = Math.round(Math.random() * (ENGLISH_LETTERS_NUMBER - 1));
      result += LETTERS[idx];
    } else if (i === 1 || i === 3) {
      idx = Math.round(Math.random() * (DIGITS_NUMBER - 1));
      result += DIGITS[idx];
    }
  }

  return result;
};

export const utils = {
  getLabelById,
  getPlaceholderById,
  getRequiredById,
  getIdByLabel,
  convertDateToCustom,
  findDebugText,
  findAlertTitle,
  findAlertContent,
  findAlertActions,
  addID,
};
