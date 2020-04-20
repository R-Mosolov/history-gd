import React from "react";

import "./audio-generator.css";

import LeftNavigation from "../../../components/left-navigation/left-navigation";

function AudioGenerator() {
  return (
    <div id="body-test" className="audio-generator">
      <div className="d-flex">
        <LeftNavigation />

        <div className="col-lg-9">
          <h1 className="mt-5 mb-5 text-center">Генератор аудиомонографий</h1>

          <div className="input-group mb-3 container">
            <p className="text-justify">
              В рамках настоящей страницы Вам предлагается перести текст любой
              монографии в аудиоформат (MP3).
            </p>
            <p className="text-justify">
              Зачем это нужно? Дело в том, что при наличии монографий в
              аудиоформате Вы можете изучать объёмную научную литературу
              паралельно с др. видами деятельности, например, поездкой в
              автомобиле или готовкой ужина. Иными словами, аудиоформат
              монографий позволяет распараллеливать действия,{" "}
              <b>увеличивая Вашу производительность как учёного</b>!
            </p>

            <textarea id="audio-monograph-input" className="mt-2 w-100" />
            <div className="d-flex justify-content-center w-100">
              <button id="btn-to-create-audio" className="mt-3 btn btn-success">
                Создать MP3
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioGenerator;
