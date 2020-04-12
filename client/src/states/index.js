import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import {createStore} from "redux";
import reducer from "./reducer";
import {addNewText, deleteAllText} from "./actions";
import FullManuscript from "../components/full-manuscript/full-manuscript";

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

const update = () => {
    ReactDOM.render(
        <Router>
            <FullManuscript
                monographText={store.getState()}
                addNewText={store.dispatch(addNewText())}
                deleteAllText={store.dispatch(deleteAllText())}
            />
        </Router>,
        document.getElementById("root")
    );
};

update();
store.subscribe(update);

export default store;
