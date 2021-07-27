import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Row, Col, Card } from "react-bootstrap";
import "../css/ArticleSlide.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "../css/CitySlide.css";
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

const ArticleSlideComponent = () => {
  return (
    <div id = "articleSlideDrift">
      <div className="container" >
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
          <span>Новости</span>
          <span> > </span>
          <span>Lorem ipsum dolor sit amet, conse...</span>
        </div>
      </div>
      <div className="conntainer">
        <div className="row">
          <div className="col-12 text-center news_about_theme my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </div>
        </div>
        <div className="row">
          <div className="col-xl-10 offset-xl-1 col-12 position-relative mb-4 d-xl-block d-none">
            <img className="w-100" src="./images/image 36.png" alt="" />
            <div className="news_about_image">
              <i>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0C10.8599 0 14 3.14007 14 7C14 10.8599 10.8599 14 7 14C3.14007 14 0 10.8599 0 7C0 3.14007 3.14007 0 7 0ZM6.41668 7C6.41668 7.32257 6.67743 7.58332 7 7.58332H9.33332C9.6559 7.58332 9.91665 7.32257 9.91665 7C9.91665 6.67743 9.6559 6.41668 9.33332 6.41668H7.58332V2.91668C7.58332 2.5941 7.32257 2.33335 7 2.33335C6.67743 2.33335 6.41668 2.5941 6.41668 2.91668V7Z"
                    fill="#52BFFF"
                  />
                </svg>
              </i>
              <span>
                Время чтения: <span>10 минут</span>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-10 offset-xl-1 col-12 news_about_text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit! Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <img className="w-100 my-4 " src="./images/image 36.png" alt="" />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in c
          </p>
          </div>
        </div>
        <div className="similar_news_theme">
            Похожие новости
        </div>
      </div>
      <div id="article_slide">
        <div className="slider__relative article__slide">
          <Swiper
            navigation={true}
            pagination={{ clickable: true }}
            className={"mySwiper"}
            slidesPerView={1}
            spaceBetween={20}
            autoplay={true}
          >
            {[...new Array(10)].map((index) => (
              <SwiperSlide key={index}>
                <Row className="justify-content-center">
                  <Col xs={12} sm={10}>
                    <Card className="border-0 news__card">
                      <Card.Body>
                        <Row>
                          <Col lg={4}>
                            <div className="mb-2">
                              <img
                                src="images/image 35.png"
                                className="news__img w-100"
                                alt=""
                              />
                            </div>
                          </Col>
                          <Col lg={8}>
                            <h5 className="news__title">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                            </h5>
                            <p className="news__text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation. Lorem ipsum dolor sit
                              amet, consectetur adipiscing elit! Lorem ipsum
                              dolor sit amet, consectetur adipiscing elit...;
                            </p>
                            <p className="news__info">
                              <i className="fas fa-clock news__icon me-2"></i>
                              Время чтения: <b>10 минут</b>
                            </p>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ArticleSlideComponent;
