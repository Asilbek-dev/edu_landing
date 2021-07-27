import "../css/students.css";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/zoom/zoom.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Zoom, Navigation, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Zoom, Navigation, Pagination]);

const student = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
  {
    id: "7",
  },
  {
    id: "8",
  },
  {
    id: "9",
  },
  {
    id: "10",
  },
];

export default function Students() {
  return (
    <div id="students">
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
          <span>Студенты</span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 student_theme">
            <p>Студенты</p>
          </div>
          <div className="row">
            {student.map(({ id }) => (
              <div className="col-xl-8 offset-xl-2 col-12 offset-0" key={id}>
                <div className="student_card d-xl-flex p-2 d-block">
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                      background: "#52BFFF",
                      borderRadius: "20px",
                      position: "relative",
                    }}
                    zoom={true}
                    navigation={true}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="swiper-zoom-container">
                        <img src="./images/student.png" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-zoom-container">
                        <img src="./images/student.png" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-zoom-container">
                        <img src="./images/student.png" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="student_text">
                    <p>Александр Иванов</p>
                    <div className="text_right d-flex">
                      <img src="./images/cap.png" alt="" />
                      <p>Название университета</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit! Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua, ipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua!
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-xl-2 offset-xl-5 col-sm-4 offset-sm-4">
            <button className="d-flex align-items-center btn">
              <div className="student_cricle">
                <img src="./images/down.png" alt="" />
              </div>
              <p>Еще</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
