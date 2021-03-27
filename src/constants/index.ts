// Registration form data
export const FIRST_NAME: string = 'firstName';
export const MIDDLE_NAME: string = 'middleName';
export const LAST_NAME: string = 'lastName';

export const UNIVERSITY: string = 'university';
export const PROF_DEGREE: string = 'profDegree';
export const ACADEMIC_DEGREE: string = 'academicDegree';
export const RESEARCH_INTERESTS: string = 'researchInterests';

export const REGISTRATION_EMAIL: string = 'registrationEmail';
export const PHONE: string = 'phone';
export const PASSWORD: string = 'password';
export const REPEAT_PASSWORD: string = 'repeatPassword';

// Database collections
export const USERS: string = 'users';
export const MANUSCRIPTS: string = 'manuscripts';

// Manuscript types
export const MONOGRAPH: string = 'monograph';
export const TEACHING_AID: string = 'teaching-aid';
export const SCIENCE_PUBLICATION: string = 'science-publication';
export const CONFERENCE_THESES: string = 'conference-theses';
export const OTHER: string = 'other';
export const LARGE: string = 'large';
export const SMALL: string = 'small';

// Redux: Manuscripts page
export const LARGE_MANUSCRIPTS: string = 'largeManuscripts';
export const SMALL_MANUSCRIPTS: string = 'smallManuscripts';
export const FETCHED_MANUSCRIPTS: string = 'fetchedManuscripts';
export const INTERSECTED_MANUSCRIPTS: string = 'intersectedManuscripts';
export const SORTED_MANUSCRIPTS: string = 'sortedManuscripts';
export const FILTERED_MANUSCRIPTS: string = 'filteredManuscripts';
export const SEARCHED_MANUSCRIPTS: string = 'searchedManuscripts';

// Redux: Add Manuscript page
export const CREATE = 'create';
export const UPDATE = 'update';
export const TITLE = 'title';
export const SUBTITLE = 'subtitle';
export const PARAGRAPH = 'paragraph';
export const ORDERED_LIST = 'orderedList';
export const UNORDERED_LIST = 'unorderedList';
export const TABLE = 'table';
export const PICTURE = 'picture';
export const FORMULA = 'formula';

/**
 * Set the interface (types of keys values)
 */

interface RegistrationConfig {
  [index: number]: {
    id: string;
    label: string;
    placeholder: string;
    isRequired: boolean;
  };
}

interface ManuscriptTypesConfig {
  [index: number]: {
    typeId: string;
    typeLabel: string;
    type: string;
  };
}

/**
 * Create constants
 */

export const BASIC_INFO: RegistrationConfig = [
  {
    id: FIRST_NAME,
    label: 'Имя',
    placeholder: 'Михаил',
    isRequired: true,
  },
  {
    id: MIDDLE_NAME,
    label: 'Отчество',
    placeholder: 'Васильевич',
    isRequired: false,
  },
  {
    id: LAST_NAME,
    label: 'Фамилия',
    placeholder: 'Ломоносов',
    isRequired: true,
  },
];

export const PROF_INFO: RegistrationConfig = [
  {
    id: UNIVERSITY,
    label: 'Полное название ВУЗ-а, в котором Вы учитесь/работаете',
    placeholder: 'Московский государственный университет',
    isRequired: false,
  },
  {
    id: PROF_DEGREE,
    label: 'Учёное звание',
    placeholder: 'Профессор',
    isRequired: false,
  },
  {
    id: ACADEMIC_DEGREE,
    label: 'Учёная степень',
    placeholder: 'Академик СПбАН',
    isRequired: false,
  },
  {
    id: RESEARCH_INTERESTS,
    label: 'Научно-исследовательские интересы',
    placeholder: 'Мозаичное дело, изобретение ночезрительных труб',
    isRequired: false,
  },
];

export const SERVICE_INFO: RegistrationConfig = [
  {
    id: REGISTRATION_EMAIL,
    label: 'Эл. почта',
    placeholder: 'M.V.Lomonosov@history-gd.ru',
    isRequired: true,
  },
  {
    id: PHONE,
    label: 'Моб. телефон',
    placeholder: '89999999999',
    isRequired: true,
  },
  {
    id: PASSWORD,
    label: 'Пароль',
    placeholder: '******',
    isRequired: true,
  },
  {
    id: REPEAT_PASSWORD,
    label: 'Повторите пароль',
    placeholder: '******',
    isRequired: true,
  },
];

export const MANUSCRIPT_TYPES: ManuscriptTypesConfig = [
  {
    typeId: MONOGRAPH,
    typeLabel: 'Монография',
    type: LARGE,
  },
  {
    typeId: TEACHING_AID,
    typeLabel: 'Учебное пособие',
    type: LARGE,
  },
  {
    typeId: SCIENCE_PUBLICATION,
    typeLabel: 'Научная публикация',
    type: SMALL,
  },
  {
    typeId: CONFERENCE_THESES,
    typeLabel: 'Тезисы конференции',
    type: SMALL,
  },
  {
    typeId: OTHER,
    typeLabel: 'Другое',
    type: SMALL,
  },
];
