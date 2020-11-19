export const BASIC_INFO: string = 'basic-info';
export const PROF_INFO: string = 'prof-info';
export const SERVICE_INFO: string = 'service-info';

export const FIRST_NAME: string = 'first-name';
export const MIDDLE_NAME: string = 'middle-name';
export const LAST_NAME: string = 'last-name';

export const UNIVERSITY: string = 'university';
export const PROF_DEGREE: string = 'prof-degree';
export const ACADEMIC_DEGREE: string = 'academic-degree';
export const RESEARCH_INTERESTS: string = 'research-interests';

export const REGISTRATION_EMAIL: string = 'registration-email';
export const PHONE: string = 'phone';
export const PASSWORD: string = 'password';
export const REPEAT_PASSWORD: string = 'repeat-password';

export const USER: object = {
  basicInfo: [
    {
      id: FIRST_NAME,
      label: "Имя",
      placeholder: "Михаил",
      isRequired: true,
    },
    {
      id: MIDDLE_NAME,
      label: "Отчество",
      placeholder: "Васильевич",
      isRequired: true,
    },
    {
      id: LAST_NAME,
      label: "Фамилия",
      placeholder: "Ломоносов",
      isRequired: true,
    },
  ],
  profInfo: [
    {
      id: UNIVERSITY,
      label: "Полное название ВУЗ-а, в котором Вы учитесь/работаете",
      placeholder: "Московский государственный университет",
      isRequired: false,
    },
    {
      id: PROF_DEGREE,
      label: "Учёное звание",
      placeholder: "Профессор",
      isRequired: false,
    },
    {
      id: ACADEMIC_DEGREE,
      label: "Учёная степень",
      placeholder: "Академик СПбАН",
      isRequired: false,
    },
    {
      id: RESEARCH_INTERESTS,
      label: "Научно-исследовательские интересы",
      placeholder: "Мозаичное дело, изобретение ночезрительных труб",
      isRequired: false,
    }
  ],
  serviceInfo: [
    {
      id: REGISTRATION_EMAIL,
      label: "Email (электронная почта)",
      placeholder: "MV.Lomonosov@msu.ru",
      isRequired: true,
    },
    {
      id: PHONE,
      label: "Моб. телефон",
      placeholder: "+7 (999) 999-99-99",
      isRequired: true,
    },
    {
      id: PASSWORD,
      label: "Пароль",
      placeholder: "********",
      isRequired: true,
    },
    {
      id: REPEAT_PASSWORD,
      label: "Повторите пароль",
      placeholder: "********",
      isRequired: true,
    },
  ]
}