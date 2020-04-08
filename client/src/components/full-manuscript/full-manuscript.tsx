import React from "react";

import worksBase from "../../data/manuscripts/works-base";
import worksDetails from "../../data/manuscripts/works-details";
import LeftNavigation from "../left-navigation/left-navigation";

function FullManuscript() {
    return (
        <div className="full-manuscript">
            <div className="d-flex">
                <LeftNavigation />

                <div className="work-table col-lg-9">
                    <h1 className="mt-5 text-center">{worksBase[0].title}</h1>

                    <h3 className="mt-4 text-center">{worksBase[0].author}, {worksBase[0].created}</h3>

                    <p className="mt-4 pl-5 pr-5 text-justify">{worksDetails[0].content}</p>
                </div>
            </div>
        </div>
    );
}

export default FullManuscript;
