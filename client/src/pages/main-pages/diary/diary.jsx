import React from 'react';

import LeftNavigation from '../../../components/left-navigation/left-navigation';
import TopNavigation from '../../../components/top-navigation/top-navigation';

function Diary() {
  return (
    <div className="diary">
      <TopNavigation />

      <div className="d-flex">
        <LeftNavigation />

        <div className="diary__container col-lg-9">
          <div className="container">
            <h1 className="mt-5 text-center">Личный дневник</h1>

            <p>Здесь будут храниться дневниковые записи учёного...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diary;
