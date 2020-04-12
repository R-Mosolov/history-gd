import manuscriptsDetails from "./manuscripts-data/manuscripts-details";

const initialState = manuscriptsDetails[2].content;

function reducer (state = initialState, action) {
    switch (action.type) {
        case "ADD_NEW_TEXT":
            return state + "Добавлен новый текст. Добавлен новый текст. Добавлен новый текст. " +
                "Добавлен новый текст. Добавлен новый текст. Добавлен новый текст. Добавлен новый текст. ";
        case "DELETE_ALL_TEXT":
            return "";
        default:
            return state;
    }
}

export default reducer;
