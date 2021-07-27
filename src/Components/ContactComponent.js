import React from "react";
import "../css/contact.css";
import { Link, useLocation } from 'react-router-dom'

export default function Contact() {
    let location = useLocation()
  return (
    <>
      <div className="contact">
        <img src="./images/tree.png" alt="" />
        <p>Контакты</p>
        <p>Свяжитесь с нами и мы ответим на все ваши вопросы</p>
        <img src="./images/location.png" alt="" />
        <img src="./images/location.png" alt="" />
        <img src="./images/location.png" alt="" />
        <p>3</p>
        <p>1</p>
        <p>2</p>
        <div className="contact_card">
          <div className="card_border">
            <div className="card_text d-flex">
              <div className="contact_cricle">
                <p>1</p>
              </div>
              <div className="contact_text">
                <p>г. Город</p>
                <p>ул. Улица, 24 (Офис 24)</p>
              </div>
            </div>
            <div className="card_text d-flex">
              <div className="contact_cricle">
                <p>2</p>
              </div>
              <div className="contact_text">
                <p>г. Город</p>
                <p>ул. Улица, 24 (Офис 24)</p>
              </div>
            </div>
            <div className="card_text d-flex">
              <div className="contact_cricle">
                <p>3</p>
              </div>
              <div className="contact_text">
                <p>г. Город</p>
                <p>ул. Улица, 24 (Офис 24)</p>
              </div>
            </div>
            <div className="card_text d-flex">
              <div className="contact_cricle">
                <p>4</p>
              </div>
              <div className="contact_text">
                <p>г. Город</p>
                <p>ул. Улица, 24 (Офис 24)</p>
              </div>
            </div>
            <div className="card_text d-flex">
              <div className="contact_cricle">
                <p>5</p>
              </div>
              <div className="contact_text">
                <p>г. Город</p>
                <p>ул. Улица, 24 (Офис 24)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_box">
          <div className="box_border">
            <div className="box_phone d-flex">
              <img src="./images/call.png" alt="" />
              <div className="box_number">
                <p>Телефоны</p>
                <p>+998 (99) 878-63-99</p>
                <p>+998 (99) 878-63-99</p>
              </div>
            </div>
            <div className="box_phone d-flex">
              <img src="./images/clock.png" alt="" />
              <div className="box_number">
                <p>Время работы</p>
                <p>Пн-Пт 9:00 - 18:00</p>
              </div>
            </div>
            <div className="box_button d-flex align-items-center p-2 ">
              <div className="button_cricle">
                <img src="./images/call2.png" alt="" />
              </div>
              <p>Связаться с нами</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_mobile d-xl-none">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mobile_texts">
              <p>Контакты</p>
              <p>Свяжитесь с нами и мы ответим на все ваши вопросы</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-4">
              <div className="contact_mobile_box">
                <div className="mobile_box_border">
                  <div className="mobile_box_phone d-flex">
                    <img src="./images/call.png" alt="" />
                    <div className="mobile_box_number">
                      <p>Телефоны</p>
                      <p>+998 (99) 878-63-99</p>
                      <p>+998 (99) 878-63-99</p>
                    </div>
                  </div>
                  <div className="mobile_box_phone d-flex">
                    <img src="./images/location1.png" alt="" />
                    <div className="mobile_box_number">
                      <p>Адрес</p>
                      <p>г. Город, ул. Улица, 24 (Офис 24)</p>
                    </div>
                  </div>
                  <div className="mobile_box_phone d-flex">
                    <img src="./images/clock.png" alt="" />
                    <div className="mobile_box_number">
                      <p>Время работы</p>
                      <p>Пн-Пт 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="location">
                <img src="./images/location.png" alt="" />
                <p>1</p>
              </div>
              <div className="location1">
                <img src="./images/location.png" alt="" />
                <p>2</p>
              </div>
              <div className="location2">
                <img src="./images/location.png" alt="" />
                <p>3</p>
              </div>
            </div>
          </div>
          <div className="row mt-5 py-5">
            <div className="col-12">
              <div className="contact_mobile_box d-flex">
                <div className="mobile_box_border">
                  <div className="mobile_box_phone d-flex">
                    <img src="./images/call.png" alt="" />
                    <div className="mobile_box_number">
                      <p>Телефоны</p>
                      <p>+998 (99) 878-63-99</p>
                      <p>+998 (99) 878-63-99</p>
                    </div>
                  </div>
                  <div className="mobile_box_phone d-flex">
                    <img src="./images/clock.png" alt="" />
                    <div className="mobile_box_number">
                      <p>Время работы</p>
                      <p>Пн-Пт 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="mobile_box_button d-flex align-items-center px-2">
                <div className="mobile_button_cricle">
                  <img src="./images/call2.png" alt="" />
                </div>
                <p>Связаться с нами</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
