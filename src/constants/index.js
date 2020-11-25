"use strict";
exports.__esModule = true;
exports.SERVICE_INFO = exports.PROF_INFO = exports.BASIC_INFO = exports.MANUSCRIPTS = exports.USERS = exports.REPEAT_PASSWORD = exports.PASSWORD = exports.PHONE = exports.REGISTRATION_EMAIL = exports.RESEARCH_INTERESTS = exports.ACADEMIC_DEGREE = exports.PROF_DEGREE = exports.UNIVERSITY = exports.LAST_NAME = exports.MIDDLE_NAME = exports.FIRST_NAME = void 0;
// Registration form data
exports.FIRST_NAME = 'first-name';
exports.MIDDLE_NAME = 'middle-name';
exports.LAST_NAME = 'last-name';
exports.UNIVERSITY = 'university';
exports.PROF_DEGREE = 'prof-degree';
exports.ACADEMIC_DEGREE = 'academic-degree';
exports.RESEARCH_INTERESTS = 'research-interests';
exports.REGISTRATION_EMAIL = 'registration-email';
exports.PHONE = 'phone';
exports.PASSWORD = 'password';
exports.REPEAT_PASSWORD = 'repeat-password';
// Database collections
exports.USERS = 'users';
exports.MANUSCRIPTS = 'manuscripts';
/**
 * Create constants
 */
exports.BASIC_INFO = [
    {
        id: exports.FIRST_NAME,
        label: "Имя",
        placeholder: "Михаил",
        isRequired: true
    },
    {
        id: exports.MIDDLE_NAME,
        label: "Отчество",
        placeholder: "Васильевич",
        isRequired: true
    },
    {
        id: exports.LAST_NAME,
        label: "Фамилия",
        placeholder: "Ломоносов",
        isRequired: true
    },
];
exports.PROF_INFO = [
    {
        id: exports.UNIVERSITY,
        label: "Полное название ВУЗ-а, в котором Вы учитесь/работаете",
        placeholder: "Московский государственный университет",
        isRequired: false
    },
    {
        id: exports.PROF_DEGREE,
        label: "Учёное звание",
        placeholder: "Профессор",
        isRequired: false
    },
    {
        id: exports.ACADEMIC_DEGREE,
        label: "Учёная степень",
        placeholder: "Академик СПбАН",
        isRequired: false
    },
    {
        id: exports.RESEARCH_INTERESTS,
        label: "Научно-исследовательские интересы",
        placeholder: "Мозаичное дело, изобретение ночезрительных труб",
        isRequired: false
    },
];
exports.SERVICE_INFO = [
    {
        id: exports.REGISTRATION_EMAIL,
        label: "Email (электронная почта)",
        placeholder: "MV.Lomonosov@msu.ru",
        isRequired: true
    },
    {
        id: exports.PHONE,
        label: "Моб. телефон",
        placeholder: "+7 (999) 999-99-99",
        isRequired: true
    },
    {
        id: exports.PASSWORD,
        label: "Пароль",
        placeholder: "********",
        isRequired: true
    },
    {
        id: exports.REPEAT_PASSWORD,
        label: "Повторите пароль",
        placeholder: "********",
        isRequired: true
    },
];
