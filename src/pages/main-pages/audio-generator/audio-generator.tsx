import React from "react";

import "./audio-generator.css";

import LeftNavigation from "../../../components/left-navigation/left-navigation";
import Figure from "./images/figure.jpeg";
import TopNavigation from "../../../components/top-navigation/top-navigation";

function AudioGenerator() {
  return (
    <div className="audio-generator">
      <TopNavigation />

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
              <b>увеличивая Вашу производительность как учёного</b> (см. табл.
              1)!
            </p>

            <textarea id="audio-monograph-input" className="mt-2 w-100" />
            <div className="d-flex justify-content-center w-100">
              <button id="btn-to-create-audio" className="mt-3 btn btn-success">
                Создать MP3
              </button>
            </div>

            <div>
              <p className="mt-4 text-right font-italic">Таблица 1</p>
              <p className="text-center font-weight-bold">
                Сравнение последовательного и параллельного способов выполнения
                задач
              </p>
              <img className="border rounded" src={Figure} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioGenerator;
