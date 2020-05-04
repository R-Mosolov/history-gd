import React from "react";

import LeftNavigation from "../../../components/left-navigation/left-navigation";

function SourceHandling() {
  const marginTopFour = "mt-4";
  const marginTopFive = "mt-5";

  return (
    <div className="full-manuscript">
      <div className="d-flex">
        <LeftNavigation />

        <div className="source-handling col-lg-9">
          <div className="container">
            <h1 className="mt-5 text-center">Обработка источников</h1>

            <div className="source-handling__description mt-5 p-5 text-justify bg-light rounded">
              В рамках данной страницы приведён обзор сервисов, являющихся
              полезными инструментами для работы с текстами и оптимизации
              научно-исследовательской деятельности.
            </div>

            <div className={`source-handling__services ${marginTopFive}`}>
              <h2>Обзор информационных технологий</h2>

              <h3 className={`${marginTopFive}`}>
                1 Сервисы для работы с текстом
              </h3>

              <h4 className={`${marginTopFour}`}>
                <a href="https://www.newocr.com">
                  1.1 New OCR: Перевести изображение в текст
                </a>
              </h4>
              <p className="text-justify">
                Сервис позволяет перекодировать изображения текстов (скриншоты,
                фотографии) в текстовый формат. Это экономит время
                исследователей на самостоятельном, ручном наборе текста из
                публикаций, учебников и монографий, опубликованных на портале
                академической литературы «Znanium» (на портале «Znanium» стоит
                защита от копирования символов, искажающая символы текста).
              </p>

              <h4 className={`${marginTopFour}`}>
                <a href="http://ru.texthandler.com/text-tools/remove-line-breaks/">
                  1.2 Text Handler: Удалить разрывы между строк
                </a>
              </h4>
              <p className="text-justify">
                Сервис дополняет работу сервиса в п. 1 тем, что удаляет разрывы
                между строк, т.е. удаляет все лишние переносы (результаты
                нажатия клавиши «Enter»), а также тире (знаки переноса слов на
                новую строку: «-»).
              </p>

              <h4 className={`${marginTopFour}`}>
                <a href="https://smallpdf.com/ru/split-pdf">
                  1.3 Small PDF: Разделить текст на части
                </a>
              </h4>
              <p className="text-justify">
                Программа позволяет разделять PDF-файлы и отправлять студентам
                только те части (страницы) монографий, которые нужно изучить к
                следующему семинару. Это минимизирует вероятность того, что
                кто-либо из студентов, открыв полный файл монографии на 200-400
                стр., сразу завершит чтение.
              </p>

              <h4 className={`${marginTopFour}`}>
                <a href="https://languagetool.org/ru/">
                  1.4 Language Tool: Проверить текст на стилистические ошибки
                </a>
              </h4>
              <p className="text-justify">
                Сервис проверяет текст на наличие орфографических и
                пунктуационных ошибках, выделяя их разными цветами. Полезен при
                работе с большими текстами, особенно когда «замыливается глаз».
              </p>

              <h4 className={`${marginTopFour}`}>
                <a href="https://www.artlebedev.ru/typograf/">
                  1.5 Типограф: Проверить стиль символов
                </a>
              </h4>
              <p className="text-justify">
                Сервис дизайн-студии А.А. Лебедева, позволяет обрабатывать
                текст, чтобы тот имел качественный, презентабельный вид перед
                научными публикациями или докладами с презентацией. Заменяет
                прямые кавычки «ёлочками» («»), добавляет удлиненные тире («–»)
                и т.д.
              </p>

              <h3 className={`${marginTopFive}`}>
                2 Сервисы для контент-анализа (дискурс-анализа)
              </h3>

              <h4 className={`${marginTopFour}`}>
                <a href="http://vkmate.ru/servisy/sohranenie-steny-vkontakte/">
                  2.2 VKMate: Собрать материал для контент-анализа
                </a>
              </h4>
              <p className="text-justify">
                Сервис позволяет сохранять в один файл (формат «.txt») тексты
                постов из группы «Вконтакте». Таким образом, можно собрать
                тексты 1000 и более постов за 5 мин., на что при самостоятельном
                копировании ушло бы несколько часов, а то и дней. Тексты постов
                можно использовать при контент-анализе, чтобы, во-первых,
                изучать социально-политические взгляды администраторов групп
                (наиболее актуально для политологов), во-вторых, чтобы считывать
                скрытый посыл, который данная группа транслирует в общество.
              </p>

              <h4 className={`${marginTopFour}`}>
                <a href="https://voyant-tools.org">
                  2.3 Voyant Tools: Провести контент-анализ
                </a>
              </h4>
              <p className="text-justify">
                Сервис разбивает текст на слова и подсчитывает количество
                упоминаний каждого слова. В итоге получается статистика наиболее
                часто встречаеммых слов. Имеется возможность выгрузки полученных
                данных в табличном формате (Excel).
              </p>

              <h3 className={`${marginTopFive}`}>
                3 Социально-демографический анализ
              </h3>

              <h4 className={`${marginTopFour}`}>
                <a href="https://adspoiler.com">
                  3.1 Adspoiler: Определить интересы аудитории
                </a>
              </h4>
              <p className="text-justify">
                Сервис позволяет проводить общий социально-демографический
                анализ групп «Вконтакте» (определять соотношения пола, возраста,
                стран подписчиков группы, тематику групп).
              </p>

              <h4 className={`${marginTopFour}`}>
                <a href="https://vk.targethunter.ru">
                  3.2 Target Hunter: Провести системный анализ социальной группы
                </a>
              </h4>
              <p className="text-justify">
                <p>
                  3.2.1 Это сервис, на наш взгляд, заслуживающий отдельного
                  рассмотрения. Его возможности столь широки и многообразны,
                  что, полагаем, если бы З. Фрейд жил в наше время и искал
                  возможности для исследования психологии больших социальных
                  групп, то данный сервис, вероятно, был бы первым в его
                  браузерных закладках.
                </p>

                <p>
                  3.2.2 «TargetHunter» – это сервис, изначально
                  разрабатывающийся для маркетологов, однако его функционал так
                  велик, что деятелям гуманитарных наук – особенно
                  представляющим собой молодое поколение родившихся после 1990-х
                  гг., в период появления Интернета в России – на наш взгляд,
                  недопустимо о нем не знать.
                </p>

                <p>
                  3.2.3 Функциональные возможности данного сервиса позволяют:
                </p>
                <p>
                  – проводить контент-анализ собранного через сервис в п. 4
                  текста, что устраняет потребность в самостоятельном подсчете
                  слов;
                </p>
                <p>
                  – собирать информацию об отличиях в музыкальных предпочтениях
                  пользователей;
                </p>
                <p>
                  – собирать тексты комментариев под постами (хорошее дополнение
                  к сервису в п. 4, чтобы видеть общую картину не только по
                  транслируемым сообщениям, но и реакциям на них);
                </p>
                <p>
                  – собирать социально-демографические данные о пользователях
                  интересующих групп в течение 5 мин.-12 ч. (в зависимости от
                  скорости Интернета и выбранных характеристик). Причем он
                  позволяет собирать информацию с подробной детализацией по
                  каждому пользователю, которые можно скачать файлом «Excel» и
                  статистически обработать в SPSS. Наличие данных по
                  пользователям экономит время исследователя на исключении
                  «паспортички» из анкеты, поскольку все половозрастные
                  характеристики уже будут иметься «на руках»;
                </p>
                <p>
                  – в отличие от «IQ Buzz», нередко упоминаемого преподавателями
                  социологии, «TargetHunter» стоит в 11 раз дешевле (700
                  руб./мес. вместо 7900 руб./мес.);
                </p>
                <p>
                  – однако пользование данным сервисом должно сопровождаться
                  пересмотром такого понятия, как «корректность/случайной
                  подбора выборки». Например, насколько социологично опрашивать
                  только тех пользователей, у которых есть «аватар» (главная
                  фотография личного профиля) на странице? Почему одни индивиды
                  его устанавливают, а другие нет? На что влияет данное отличие
                  индивидов друг от друга.
                </p>

                <p>
                  3.2.4 «Вконтакте» как социальная сеть с 97 миллионами активных
                  пользователей в месяц, то есть высокой концентрацией
                  российских респондентов, вкупе с современными IT
                  (информационными технологиями) позволяет получать при
                  правильно организованном подходе репрезентативные данные о
                  социальных мотивах поведения сотен, тысяч и миллионов
                  пользователей социальной сети как в новом, интерактивном поле
                  общения между индивидами, имеющем свои правила и особенности,
                  которые надлежит изучить.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SourceHandling;