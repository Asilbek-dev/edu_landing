import React from "react";
import { Link } from "react-router-dom";
import MaskedInput from "react-text-mask";
import "./../css/consultation.css";
import ContactUsAnna from "./ContactUsAnna";
import StyleQuestion from "./StyleQuestion";

const Consultation = () => {
  return (
    <>
      <div className="container">
        <div className="menu_drift">
          <i>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6221 6.08932C13.6217 6.089 13.6214 6.08868 13.6211 6.08836L7.9102 0.377686C7.66678 0.134155 7.34314 0 6.99888 0C6.65463 0 6.33099 0.134048 6.08746 0.377579L0.379561 6.08537C0.377639 6.0873 0.375716 6.08932 0.373794 6.09125C-0.126084 6.59401 -0.12523 7.40973 0.37625 7.91121C0.605361 8.14043 0.907958 8.27319 1.23149 8.28708C1.24463 8.28836 1.25787 8.289 1.27122 8.289H1.49884V12.4917C1.49884 13.3233 2.17549 14 3.00734 14H5.24162C5.46806 14 5.65178 13.8164 5.65178 13.5898V10.2949C5.65178 9.91542 5.96046 9.60674 6.33996 9.60674H7.6578C8.03731 9.60674 8.34599 9.91542 8.34599 10.2949V13.5898C8.34599 13.8164 8.5296 14 8.75615 14H10.9904C11.8223 14 12.4989 13.3233 12.4989 12.4917V8.289H12.71C13.0541 8.289 13.3778 8.15495 13.6214 7.91142C14.1234 7.40909 14.1236 6.59198 13.6221 6.08932Z"
                fill="#52BFFF"
              />
            </svg>
          </i>
          <span>Главная</span>
          <span> > </span>
          <span>Заявка на консультацию</span>
        </div>
      </div>
      <div id="consultation" className="container">
        <div id="title">
          <Link to = "/">
            <button>
              <i class="fas fa-angle-left"></i>
              Назад
            </button>
          </Link>
          <h1>Заявка на консультацию</h1>
        </div>
        <div className="body">
          <div className="row align-items-end m-0 pt-5">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>
                  <i class="fas fa-user label-icon"></i>
                  ФИО
                </label>
                <input type="text" className="form-control" placeholder="Имя" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group pt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Фамилия"
                />
              </div>
            </div>
          </div>
          <div className="row m-0 pt-4">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>
                  <i class="fas fa-gift label-icon"></i>
                  Дата рождения
                </label>
                <div className="d-flex">
                  <input
                    type="number"
                    className="form-control date-day"
                    placeholder="День"
                  />
                  <select className="form-control" placeholder="Месяц">
                    <option>Месяц</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <input
                    type="text"
                    className="form-control date-year"
                    placeholder="Год"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-end m-0 pt-4">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>
                  <i class="fas fa-map-marker-alt label-icon"></i>
                  Контактные данные
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Город"
                />
              </div>
              <div className="form-group pt-2">
                <MaskedInput
                  className="form-control"
                  placeholder="+998 (____) ___ - __ - __"
                  mask={[
                    "+",
                    "9",
                    "9",
                    "8",
                    " ",
                    "(",
                    " ",
                    /[1-9]/,
                    /\d/,
                    " ",
                    ")",
                    " ",
                    /\d/,
                    /\d/,
                    /\d/,
                    "-",
                    /\d/,
                    /\d/,
                    "-",
                    /\d/,
                    /\d/,
                  ]}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="E-mail"
                />
              </div>
            </div>
          </div>
          <div className="row align-items-end m-0 pt-4">
            <div className="col-12 col-md-6">
              <label className="pl-3 pb-3">
                <i class="fas fa-chart-line label-icon"></i>
                Уровень английского
              </label>
              <div className="form-group radio">
                <input id="11" type="radio" name="english_level" className="" />
                <label for="11">Начинающий (А1 - А2)</label>
              </div>
              <div className="form-group radio">
                <input id="12" type="radio" name="english_level" className="" />
                <label for="12">Средний (B1 - B2)</label>
              </div>
              <div className="form-group radio">
                <input id="13" type="radio" name="english_level" className="" />
                <label for="13">Продвинутый (C1 - C2)</label>
              </div>
            </div>
          </div>
          <div className="row align-items-end m-0 pt-4">
            <div className="col-12 col-md-6">
              <label className="pl-3 pb-3">
                <i class="fas fa-graduation-cap label-icon"></i>
                Предпочтительная программа
              </label>
              <div className="form-group radio">
                <input
                  id="21"
                  type="radio"
                  name="preferred_program"
                  className=""
                />
                <label for="21">Бакалавр</label>
              </div>
              <div className="form-group radio">
                <input
                  id="22"
                  type="radio"
                  name="preferred_program"
                  className=""
                />
                <label for="22">Foundation</label>
              </div>
              <div className="form-group radio">
                <input
                  id="23"
                  type="radio"
                  name="preferred_program"
                  className=""
                />
                <label for="23">Магистр</label>
              </div>
            </div>
          </div>
          <div className="row m-0 pt-4">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>
                  <i class="far fa-calendar-alt label-icon"></i>
                  Предпочтительная дата начала
                </label>
                <div className="d-flex">
                  <input
                    type="number"
                    className="form-control date-day"
                    placeholder="День"
                  />
                  <select className="form-control" placeholder="Месяц">
                    <option>Месяц</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <input
                    type="text"
                    className="form-control date-year"
                    placeholder="Год"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row m-0 pt-4 pb-5">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Дополнительные комментарии"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="button_contact_us text-center">
          <button className="edu_landing_button about-send ">
            <div className="button_block ">
              <i>
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.00760714 0.000488281L0 5.33381L6.85714 6.85763L0 8.38145L0.00760714 13.7148L16 6.85763L0.00760714 0.000488281Z"
                    fill="white"
                  />
                </svg>
              </i>
              <span>Отправить</span>
            </div>
          </button>
        </div>
        <ContactUsAnna />
        <StyleQuestion />
      </div>
    </>
  );
};

export default Consultation;
