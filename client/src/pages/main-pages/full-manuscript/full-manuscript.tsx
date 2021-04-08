import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import manuscriptsBase from '../../../data/manuscripts/manuscripts-base';
import manuscriptsDetails from '../../../data/manuscripts/manuscripts-details';

import LeftNavigation from '../../../components/left-navigation/left-navigation';
import TopNavigation from '../../../components/top-navigation/top-navigation';

function FullManuscript() {
  return (
    <div className="full-manuscript">
      <TopNavigation />

      <div className="d-flex">
        <LeftNavigation />

        <div className="work-table col-lg-9">
          <div className="container">
            <h1 className="mt-5 text-center">{manuscriptsBase[2].title}</h1>

            <h3 className="mt-4 text-center">
              {manuscriptsBase[2].author}, {manuscriptsBase[2].creationDate}
            </h3>

            {manuscriptsDetails.map((manuscript: any) => {
              return (
                <p key={uuidv4()} className="mt-4 text-justify">
                  {manuscript.content}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullManuscript;
