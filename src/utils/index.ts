interface UtilsConfig {
  (
    id: string,
    obj: Array<object> | any,
  ): string;
}

const getLabelById: UtilsConfig = (id, obj) => obj.find((item: any) => item.id === id).label;
const getPlaceholderById: UtilsConfig = (id, obj) => obj.find((item: any) => item.id === id).placeholder;
const getRequiredById: UtilsConfig = (id, obj) => obj.find((item: any) => item.id === id).isRequired;

const changeDateFormat = () => {
  const date = new Date();

  const currentDay = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();

  return (
    `${(currentDay > 9) ? currentDay : `0${currentDay}`}.
    ${(currentMonth > 9) ? currentMonth : `0${currentMonth}`}.
    ${currentYear}`
  );
};

export const utils = {
  getLabelById,
  getPlaceholderById,
  getRequiredById,
  changeDateFormat,
};
