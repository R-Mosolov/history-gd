import React from "react";

import "./audio-generator.css";

import LeftNavigation from "../../../components/left-navigation/left-navigation";
// import "./functions/convert-to-audio/artyom-lib";
import "./functions/convert-to-audio/youtube-lib-3";

function AudioGenerator() {
  return (
    <div id="body-test" className="audio-generator">
      <div className="d-flex">
        <LeftNavigation />

        <div className="col-lg-9">
          <h1 className="mt-5 mb-5 text-center">Генератор аудиомонографий</h1>

          <div className="input-group mb-3 container">
            <p className="text-justify">
              В рамках настоящей страницы Вам предлагается перести текст любой монографии в аудиоформат (MP3).
            </p>
            <p className="text-justify">
              Зачем это нужно? Дело в том, что при наличии монографий в аудиоформате Вы можете изучать объёмную
              научную литературу паралельно с др. видами деятельности, например, поездкой в автомобиле или
              готовкой ужина. Иными словами, аудиоформат монографий позволяет распараллеливать действия, <b>увеличивая
              Вашу производительность как учёного</b>!
            </p>

            <input type="text" id="audio-monograph-input" className="mt-2 w-100"/>
            <div className="d-flex justify-content-center w-100">
              <button
                id="btn-to-create-audio"
                className="mt-3 btn btn-success"
              >
                Создать MP3
              </button>
            </div>

            {/*<div className="container text-center">*/}
            {/*  <img src="img/speech.png" alt="" className="mb-5" />*/}
            {/*  <div className="row">*/}
            {/*    <div className="col-md-6 mx-auto">*/}
            {/*      <form id="form-test" className="mb-5">*/}
            {/*        <div className="form-group">*/}
            {/*          <textarea id="text-input" className="form-control form-control-lg" placeholder="Type anything..." defaultValue={""} />*/}
            {/*        </div>*/}
            {/*        <div className="form-group">*/}
            {/*          <label htmlFor="rate">Rate</label>*/}
            {/*          <div id="rate-value" className="badge badge-primary float-right">1</div>*/}
            {/*          <input type="range" id="rate" className="custom-range" min="0.5" max={2} defaultValue={1} step="0.1" />*/}
            {/*        </div>*/}
            {/*        <div className="form-group">*/}
            {/*          <label htmlFor="pitch">Pitch</label>*/}
            {/*          <div id="pitch-value" className="badge badge-primary float-right">1</div>*/}
            {/*          <input type="range" id="pitch" className="custom-range" min={0} max={2} defaultValue={1} step="0.1" />*/}
            {/*        </div>*/}
            {/*        <div className="form-group">*/}
            {/*          <select id="voice-select" className="form-control form-control-lg" />*/}
            {/*        </div>*/}
            {/*        <button className="btn btn-light btn-lg btn-block">Speak It</button>*/}
            {/*      </form>*/}
            {/*      <p className="text-secondary"> Note: This app uses the Web Speech API which is experimental and may not fully work in some versions of certain browsers</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioGenerator;
