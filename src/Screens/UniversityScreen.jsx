import { React, useState } from "react";
import "../css/university.css";

import { Radio, Input, Space, Menu, Checkbox } from "antd";
import {
  SearchOutlined,
  FlagOutlined,
  UserOutlined,
  BookOutlined,
} from "@ant-design/icons";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/zoom/zoom.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Zoom, Navigation, Pagination } from "swiper/core";
import { Link } from "react-router-dom";
import ContactUsAnna from "../Components/ContactUsAnna";
import StyleQuestion from "../Components/StyleQuestion";

// install Swiper modules
SwiperCore.use([Zoom, Navigation, Pagination]);

const { SubMenu } = Menu;

const countries = [
  {
    id: "1",
    title: "Страна",
  },
  {
    id: "2",
    title: "Страна",
  },
  {
    id: "3",
    title: "Страна",
  },
  {
    id: "4",
    title: "Страна",
  },
  {
    id: "5",
    title: "Страна",
  },
  {
    id: "6",
    title: "Страна",
  },
  {
    id: "7",
    title: "Страна",
  },
  {
    id: "8",
    title: "Страна",
  },
  {
    id: "9",
    title: "Страна",
  },
  {
    id: "10",
    title: "Страна",
  },
];
const form = [
  {
    id: "1",
    title: "Бакалавриат",
  },
  {
    id: "2",
    title: "Магистратура",
  },
  {
    id: "3",
    title: "Докторантура",
  },
  {
    id: "4",
    title: "Подготовка к университету",
  },
  {
    id: "5",
    title: "Языковые курсы",
  },
];
const direction = [
  {
    id: "1",
    title: "Архитектура",
  },
  {
    id: "2",
    title: "Архитектура",
  },
  {
    id: "3",
    title: "Архитектура",
  },
  {
    id: "4",
    title: "Архитектура",
  },
  {
    id: "5",
    title: "Архитектура",
  },
  {
    id: "6",
    title: "Архитектура",
  },
  {
    id: "7",
    title: "Архитектура",
  },
  {
    id: "8",
    title: "Архитектура",
  },
  {
    id: "9",
    title: "Архитектура",
  },
  {
    id: "10",
    title: "Архитектура",
  },
];
const card = [
  {
    id: "1"
  },
  {
    id: "2"
  },
  {
    id: "3"
  },
  {
    id: "4"
  },
  {
    id: "5"
  },
  {
    id: "6"
  },
  {
    id: "7"
  },
  {
    id: "8"
  },
  {
    id: "9"
  },
  {
    id: "10"
  },
]
export default function University() {
  const [value, setvalue] = useState(1);
  const [count, setcount] = useState(true)

  const handleClick = (e) => {
    console.log("click ", e);
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setvalue(e.target.value);
  };

  const onClick = () => {
    setcount(!count)
  }

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
          <span>Университеты</span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 university_theme">
            <p>Университеты</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-xl-3 col-12 university_left "onClick = {onClick}>
            <div className="university_cricle d-xl-none" >
              <img src="./images/filtr.png" alt="" />
            </div>
            <p >Фильтры</p>
          </div>
          <Menu
              onClick={handleClick}
              style={{ width: 256, zIndex: 99999 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              className = {count ? "d-none  d-xl-none" : "d-block d-xl-none w-100"}
            >
              <SubMenu
                key="sub2"
                icon={<FlagOutlined />}
                title="Navigation Three"
              >
                <Menu.Item key="11">
                  <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                      {countries.map(({ id, title }) => (
                        <Checkbox value={id}>{title}</Checkbox>
                      ))}
                    </Space>
                  </Radio.Group>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<UserOutlined />}
                title="Форма обучения"
              >
                <Menu.Item key="2">
                  <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                      {form.map(({ id, title }) => (
                        <Checkbox value={id}>{title}</Checkbox>
                      ))}
                    </Space>
                  </Radio.Group>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                icon={<BookOutlined />}
                title="Направление обучения"
              >
                <Menu.Item key="3">
                  <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                      {direction.map(({ id, title }) => (
                        <Checkbox value={id}>{title}</Checkbox>
                      ))}
                    </Space>
                  </Radio.Group>
                </Menu.Item>
              </SubMenu>
            </Menu>
          <div className="col-xl-4 col-12 text-center">
            <Input
              className="university_search"
              placeholder="Поиск"
              prefix={<SearchOutlined className="site-form-item-icon" />}
            />
          </div>
          <div className="col-xl-5 col-12 d-flex mb-3 justify-content-xl-end justify-content-center flex-wrap">
            <div className="university_right d-flex align-items-center">
              <i>
                <svg
                  width="14"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2542 5.19363C11.118 4.96856 10.8487 4.8616 10.5953 4.93225C10.342 5.0029 10.1667 5.23376 10.1667 5.49667C10.1667 6.21185 9.58484 6.79352 8.86981 6.79352C8.15479 6.79352 7.57297 6.21185 7.57297 5.49667V0.585934C7.57297 0.348965 7.43015 0.135341 7.21118 0.0447042C6.99222 -0.0460857 6.7403 0.00396317 6.57275 0.171657C6.50684 0.237423 4.94449 1.80908 3.36154 4.1835C2.42801 5.58365 1.68307 6.9725 1.14749 8.31146C0.469086 10.0078 0.125 11.6316 0.125 13.1381C0.125 16.9217 3.20331 20 6.98703 20C10.7706 20 13.8489 16.9217 13.8489 13.1381C13.8491 10.7161 12.976 8.04321 11.2542 5.19363ZM10.8968 12.9857C10.8968 13.3093 10.6345 13.5716 10.3109 13.5716C9.98737 13.5716 9.72491 13.3093 9.72491 12.9857V11.89L6.80743 14.8076C6.69742 14.9175 6.54849 14.9791 6.39301 14.9791C6.23767 14.9791 6.08859 14.9175 5.97873 14.8076L4.61795 13.4467L3.7009 14.3637C3.47202 14.5926 3.10107 14.5926 2.87219 14.3637C2.64331 14.1348 2.64331 13.7639 2.87219 13.535L4.20367 12.2037C4.43256 11.9749 4.8035 11.9749 5.03238 12.2038L6.39301 13.5646L8.89636 11.0613H7.80048C7.47684 11.0613 7.21454 10.799 7.21454 10.4753C7.21454 10.1517 7.47684 9.88937 7.80048 9.88937H10.311C10.6345 9.88937 10.8969 10.1518 10.8969 10.4753V12.9857H10.8968Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </i>
              <span>По популярности</span>
            </div>
            <div className="university_right d-flex align-items-center mx-5">
              <i>
                <svg
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9997 5.47512C13.9997 6.0474 13.5517 6.51121 12.9989 6.51121C12.4464 6.51121 11.9981 6.0474 11.9981 5.47512V3.53756L7.01486 8.69673C6.82694 8.89099 6.57257 9 6.30698 9C6.04166 9 5.78703 8.89099 5.59937 8.69673L3.27508 6.29023L1.70869 7.91183C1.31775 8.31655 0.684154 8.31655 0.293209 7.91183C-0.0977362 7.5071 -0.0977362 6.85118 0.293209 6.44646L2.56747 4.09231C2.95841 3.68785 3.592 3.68785 3.98295 4.09258L6.30698 6.4988L10.5829 2.07219H8.71104C8.15824 2.07219 7.71022 1.60838 7.71022 1.03609C7.71022 0.463814 8.15824 0 8.71104 0H12.9992C13.5517 0 14 0.464084 14 1.03609L13.9997 5.47512Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </i>
              <span>По цене</span>
            </div>
            <div className="university_right d-flex align-items-center">
              <i>
                <svg
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9997 3.52488C13.9997 2.9526 13.5517 2.48879 12.9989 2.48879C12.4464 2.48879 11.9981 2.9526 11.9981 3.52488V5.46244L7.01486 0.303273C6.82694 0.109006 6.57257 0 6.30698 0C6.04166 0 5.78703 0.109006 5.59937 0.303273L3.27508 2.70977L1.70869 1.08817C1.31775 0.683447 0.684154 0.683447 0.293209 1.08817C-0.0977362 1.4929 -0.0977362 2.14882 0.293209 2.55354L2.56747 4.90769C2.95841 5.31215 3.592 5.31215 3.98295 4.90742L6.30698 2.5012L10.5829 6.92781H8.71104C8.15824 6.92781 7.71022 7.39162 7.71022 7.96391C7.71022 8.53619 8.15824 9 8.71104 9H12.9992C13.5517 9 14 8.53592 14 7.96391L13.9997 3.52488Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </i>
              <span>По цене</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 d-none d-xl-block">
            <Menu
              onClick={handleClick}
              style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
            >
              <SubMenu
                key="sub2"
                icon={<FlagOutlined />}
                title="Navigation Three"
              >
                <Menu.Item key="11">
                  <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                      {countries.map(({ id, title }) => (
                        <Checkbox value={id}>{title}</Checkbox>
                      ))}
                    </Space>
                  </Radio.Group>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<UserOutlined />}
                title="Форма обучения"
              >
                <Menu.Item key="2">
                  <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                      {form.map(({ id, title }) => (
                        <Checkbox value={id}>{title}</Checkbox>
                      ))}
                    </Space>
                  </Radio.Group>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                icon={<BookOutlined />}
                title="Направление обучения"
              >
                <Menu.Item key="3">
                  <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                      {direction.map(({ id, title }) => (
                        <Checkbox value={id}>{title}</Checkbox>
                      ))}
                    </Space>
                  </Radio.Group>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          <div className="col-xl-9 col-12">
            {card.map(({id}) => (
              <div className="university_card d-xl-flex d-block" key = {id}>
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
                    <img src="./images/image 35.png" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src="./images/image 35.png" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src="./images/image 35.png" />
                  </div>
                </SwiperSlide>
                <div className="university_card_stars d-flex">
                  <i>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9799 5.39375C13.9317 5.24525 13.8033 5.13702 13.6488 5.1146L9.30878 4.48392L7.3678 0.551161C7.29873 0.411161 7.15613 0.32254 7.00002 0.32254C6.84389 0.32254 6.70132 0.411161 6.63222 0.551161L4.69115 4.48392L0.351171 5.1146C0.196707 5.13702 0.0683282 5.24525 0.020094 5.39372C-0.0281676 5.54223 0.0120823 5.70522 0.12389 5.81419L3.26425 8.87542L2.52302 13.198C2.49661 13.3519 2.55988 13.5074 2.68618 13.5991C2.75763 13.651 2.84226 13.6775 2.9273 13.6775C2.99259 13.6775 3.05811 13.6619 3.1181 13.6303L7 11.5895L10.8817 13.6303C11.0199 13.703 11.1874 13.6909 11.3137 13.5991C11.44 13.5073 11.5033 13.3518 11.4769 13.1979L10.7354 8.87542L13.8761 5.81416C13.9879 5.70522 14.0282 5.54222 13.9799 5.39375Z"
                        fill="#F4C005"
                      />
                    </svg>
                  </i>
                  <i>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9799 5.39375C13.9317 5.24525 13.8033 5.13702 13.6488 5.1146L9.30878 4.48392L7.3678 0.551161C7.29873 0.411161 7.15613 0.32254 7.00002 0.32254C6.84389 0.32254 6.70132 0.411161 6.63222 0.551161L4.69115 4.48392L0.351171 5.1146C0.196707 5.13702 0.0683282 5.24525 0.020094 5.39372C-0.0281676 5.54223 0.0120823 5.70522 0.12389 5.81419L3.26425 8.87542L2.52302 13.198C2.49661 13.3519 2.55988 13.5074 2.68618 13.5991C2.75763 13.651 2.84226 13.6775 2.9273 13.6775C2.99259 13.6775 3.05811 13.6619 3.1181 13.6303L7 11.5895L10.8817 13.6303C11.0199 13.703 11.1874 13.6909 11.3137 13.5991C11.44 13.5073 11.5033 13.3518 11.4769 13.1979L10.7354 8.87542L13.8761 5.81416C13.9879 5.70522 14.0282 5.54222 13.9799 5.39375Z"
                        fill="#F4C005"
                      />
                    </svg>
                  </i>
                  <i>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9799 5.39375C13.9317 5.24525 13.8033 5.13702 13.6488 5.1146L9.30878 4.48392L7.3678 0.551161C7.29873 0.411161 7.15613 0.32254 7.00002 0.32254C6.84389 0.32254 6.70132 0.411161 6.63222 0.551161L4.69115 4.48392L0.351171 5.1146C0.196707 5.13702 0.0683282 5.24525 0.020094 5.39372C-0.0281676 5.54223 0.0120823 5.70522 0.12389 5.81419L3.26425 8.87542L2.52302 13.198C2.49661 13.3519 2.55988 13.5074 2.68618 13.5991C2.75763 13.651 2.84226 13.6775 2.9273 13.6775C2.99259 13.6775 3.05811 13.6619 3.1181 13.6303L7 11.5895L10.8817 13.6303C11.0199 13.703 11.1874 13.6909 11.3137 13.5991C11.44 13.5073 11.5033 13.3518 11.4769 13.1979L10.7354 8.87542L13.8761 5.81416C13.9879 5.70522 14.0282 5.54222 13.9799 5.39375Z"
                        fill="#F4C005"
                      />
                    </svg>
                  </i>
                  <i>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9799 5.39375C13.9317 5.24525 13.8033 5.13702 13.6488 5.1146L9.30878 4.48392L7.3678 0.551161C7.29873 0.411161 7.15613 0.32254 7.00002 0.32254C6.84389 0.32254 6.70132 0.411161 6.63222 0.551161L4.69115 4.48392L0.351171 5.1146C0.196707 5.13702 0.0683282 5.24525 0.020094 5.39372C-0.0281676 5.54223 0.0120823 5.70522 0.12389 5.81419L3.26425 8.87542L2.52302 13.198C2.49661 13.3519 2.55988 13.5074 2.68618 13.5991C2.75763 13.651 2.84226 13.6775 2.9273 13.6775C2.99259 13.6775 3.05811 13.6619 3.1181 13.6303L7 11.5895L10.8817 13.6303C11.0199 13.703 11.1874 13.6909 11.3137 13.5991C11.44 13.5073 11.5033 13.3518 11.4769 13.1979L10.7354 8.87542L13.8761 5.81416C13.9879 5.70522 14.0282 5.54222 13.9799 5.39375Z"
                        fill="#F4C005"
                      />
                    </svg>
                  </i>
                  <i>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9799 5.39375C13.9317 5.24525 13.8033 5.13702 13.6488 5.1146L9.30878 4.48392L7.3678 0.551161C7.29873 0.411161 7.15613 0.32254 7.00002 0.32254C6.84389 0.32254 6.70132 0.411161 6.63222 0.551161L4.69115 4.48392L0.351171 5.1146C0.196707 5.13702 0.0683282 5.24525 0.020094 5.39372C-0.0281676 5.54223 0.0120823 5.70522 0.12389 5.81419L3.26425 8.87542L2.52302 13.198C2.49661 13.3519 2.55988 13.5074 2.68618 13.5991C2.75763 13.651 2.84226 13.6775 2.9273 13.6775C2.99259 13.6775 3.05811 13.6619 3.1181 13.6303L7 11.5895L10.8817 13.6303C11.0199 13.703 11.1874 13.6909 11.3137 13.5991C11.44 13.5073 11.5033 13.3518 11.4769 13.1979L10.7354 8.87542L13.8761 5.81416C13.9879 5.70522 14.0282 5.54222 13.9799 5.39375Z"
                        fill="#F4C005"
                      />
                    </svg>
                  </i>
                </div>
              </Swiper>
                <div className="university_text">
                <Link to = "/name-university">
                  <p>Название университета</p>
                </Link>
                <div className="d-flex text-center justify-content-center">
                  <div className="university_text_first d-flex">
                    <i>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.9791 13.4615L13.2971 11.3927C13.7122 11.1948 13.9998 10.7711 13.9998 10.2814C13.9998 9.74674 13.6568 9.29087 13.1795 9.12156V4.38147L13.7724 4.08621C13.9115 4.01698 13.9995 3.87509 13.9998 3.71972C14 3.56436 13.9125 3.4222 13.7737 3.3525L7.1839 0.0439657C7.0681 -0.014167 6.93163 -0.014167 6.81583 0.0439657L0.226133 3.3525C0.0872816 3.4222 -0.000245576 3.56439 5.17586e-07 3.71972C0.000246611 3.87506 0.0882933 4.01698 0.227363 4.08621L2.46093 5.19836V7.82054C2.46093 7.93839 2.51163 8.05053 2.60006 8.12841C2.68091 8.19958 4.60741 9.87129 6.99991 9.87129C9.3924 9.87129 11.3189 8.19958 11.3998 8.12841C11.4882 8.05053 11.5389 7.93839 11.5389 7.82054V5.19836L12.3592 4.7899V9.12153C11.8818 9.29084 11.5389 9.74674 11.5389 10.2814C11.5389 10.7711 11.8265 11.1947 12.2415 11.3927L11.5595 13.4615C11.472 13.7269 11.6702 14.0001 11.949 14.0001H13.5896C13.869 14.0001 14.0664 13.7263 13.9791 13.4615ZM10.7186 7.62536C10.2618 7.98067 8.74121 9.05101 6.99991 9.05101C5.25833 9.05101 3.73747 7.98037 3.28122 7.62542V5.60682L6.81709 7.36743C6.87464 7.39609 6.93729 7.41044 6.99991 7.41044C7.06252 7.41044 7.12517 7.39611 7.18273 7.36743L10.7186 5.60682L10.7186 7.62536ZM12.5161 13.1798L12.7693 12.4117L13.0225 13.1798H12.5161ZM12.7693 10.6916C12.5432 10.6916 12.3592 10.5076 12.3592 10.2814C12.3592 10.0553 12.5432 9.87129 12.7693 9.87129C12.9955 9.87129 13.1795 10.0553 13.1795 10.2814C13.1795 10.5076 12.9955 10.6916 12.7693 10.6916Z"
                          fill="#52BFFF"
                        />
                      </svg>
                    </i>
                    <span>
                      <p>Бакалавриат</p>
                      <p>Магистратура</p>
                    </span>
                  </div>
                  <div className="university_card_text d-flex">
                    <i>
                      <svg
                        width="14"
                        height="12"
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.14122 0.65213C2.14084 0.65213 2.14042 0.65213 2.14004 0.65213C2.00763 0.65213 1.88309 0.703746 1.78905 0.797551C1.69397 0.892394 1.6416 1.01868 1.6416 1.15311V8.6653C1.6416 8.94077 1.86659 9.16543 2.1432 9.16614C3.30931 9.16892 5.263 9.41196 6.61078 10.8224V2.96068C6.61078 2.8673 6.58692 2.77957 6.54191 2.70698C5.43571 0.925532 3.30997 0.654864 2.14122 0.65213Z"
                          fill="#52BFFF"
                        />
                        <path
                          d="M12.3578 8.66531V1.15308C12.3578 1.01865 12.3054 0.892363 12.2103 0.797521C12.1163 0.703716 11.9917 0.6521 11.8594 0.6521C11.859 0.6521 11.8586 0.6521 11.8582 0.6521C10.6895 0.654881 8.56373 0.925548 7.45749 2.707C7.41248 2.77959 7.38867 2.86731 7.38867 2.96069V10.8224C8.73645 9.41193 10.6901 9.16889 11.8562 9.16611C12.1328 9.1654 12.3578 8.94074 12.3578 8.66531Z"
                          fill="#52BFFF"
                        />
                        <path
                          d="M13.4988 2.38458H13.1355V8.66532C13.1355 9.36867 12.5625 9.9422 11.858 9.94395C10.8689 9.9463 9.23804 10.1397 8.08301 11.2329C10.0806 10.7438 12.1865 11.0617 13.3866 11.3352C13.5365 11.3694 13.6913 11.3341 13.8114 11.2384C13.931 11.143 13.9997 11.0003 13.9997 10.8471V2.88547C13.9997 2.60929 13.7749 2.38458 13.4988 2.38458Z"
                          fill="#52BFFF"
                        />
                        <path
                          d="M0.864138 8.66532V2.38458H0.500891C0.224755 2.38458 0 2.60929 0 2.88547V10.847C0 11.0002 0.0686332 11.1428 0.18827 11.2383C0.308237 11.3339 0.462944 11.3693 0.613032 11.3351C1.81317 11.0615 3.91907 10.7436 5.9166 11.2328C4.76162 10.1396 3.13073 9.94626 2.14163 9.9439C1.43724 9.9422 0.864138 9.36867 0.864138 8.66532Z"
                          fill="#52BFFF"
                        />
                      </svg>
                    </i>
                    <span className="d-xl-flex d-block">
                      <div className="mx-xl-3">
                        <p>Архитектура</p>
                        <p>Архитектура</p>
                        <p>Архитектура</p>
                        <p>Архитектура</p>
                      </div>
                      <div>
                        <p>Архитектура</p>
                        <p>Архитектура</p>
                        <p>Архитектура</p>
                        <a href="#">Еще 30 ...</a>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-5 col-5 offset-1 offset-xl-0 university_text_last">
                    <i>
                      <svg
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.9601 1.246C10.858 1.1865 8.44007 -0.188426 5.72875 1.23375C4.05982 2.10993 2.53382 1.64557 1.91668 1.38425V0.583324C1.91668 0.261324 1.65593 0 1.33332 0C1.01075 0 0.75 0.261324 0.75 0.583324V1.75V7.59443V13.4167C0.75 13.7393 1.01075 14 1.33332 14C1.6559 14 1.91665 13.7393 1.91665 13.4167V8.46707C2.3769 8.61525 2.98765 8.7529 3.69932 8.75232C4.4705 8.75232 5.35482 8.5919 6.27125 8.11125C8.39282 6.99593 10.2904 8.05057 10.375 8.09958C10.5541 8.20282 10.7763 8.204 10.9572 8.10015C11.1386 7.99572 11.25 7.80322 11.25 7.5944V1.75C11.25 1.54293 11.1398 1.35043 10.9601 1.246Z"
                          fill="#52BFFF"
                        />
                      </svg>
                    </i>
                    <span>Москва, Россия</span>
                  </div>
                  <div className="col-xl-7 col-4 university_text_last">
                    <span>Москва, Россия</span>
                  </div>
                </div>
              </div>
                <div className="university_card_right">
                <p>от 3 000 €</p>
                <p>за семестр</p>
              </div>
                <div className="university_card_stars d-xl-flex d-none">
                <i>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9799 5.39375C13.9317 5.24525 13.8033 5.13702 13.6488 5.1146L9.30878 4.48392L7.3678 0.551161C7.29873 0.411161 7.15613 0.32254 7.00002 0.32254C6.84389 0.32254 6.70132 0.411161 6.63222 0.551161L4.69115 4.48392L0.351171 5.1146C0.196707 5.13702 0.0683282 5.24525 0.020094 5.39372C-0.0281676 5.54223 0.0120823 5.70522 0.12389 5.81419L3.26425 8.87542L2.52302 13.198C2.49661 13.3519 2.55988 13.5074 2.68618 13.5991C2.75763 13.651 2.84226 13.6775 2.9273 13.6775C2.99259 13.6775 3.05811 13.6619 3.1181 13.6303L7 11.5895L10.8817 13.6303C11.0199 13.703 11.1874 13.6909 11.3137 13.5991C11.44 13.5073 11.5033 13.3518 11.4769 13.1979L10.7354 8.87542L13.8761 5.81416C13.9879 5.70522 14.0282 5.54222 13.9799 5.39375Z"
                      fill="#F4C005"
                    />
                  </svg>
                </i>
                <i>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9799 5.39375C13.9317 5.24525 13.8033 5.13702 13.6488 5.1146L9.30878 4.48392L7.3678 0.551161C7.29873 0.411161 7.15613 0.32254 7.00002 0.32254C6.84389 0.32254 6.70132 0.411161 6.63222 0.551161L4.69115 4.48392L0.351171 5.1146C0.196707 5.13702 0.0683282 5.24525 0.020094 5.39372C-0.0281676 5.54223 0.0120823 5.70522 0.12389 5.81419L3.26425 8.87542L2.52302 13.198C2.49661 13.3519 2.55988 13.5074 2.68618 13.5991C2.75763 13.651 2.84226 13.6775 2.9273 13.6775C2.99259 13.6775 3.05811 13.6619 3.1181 13.6303L7 11.5895L10.8817 13.6303C11.0199 13.703 11.1874 13.6909 11.3137 13.5991C11.44 13.5073 11.5033 13.3518 11.4769 13.1979L10.7354 8.87542L13.8761 5.81416C13.9879 5.70522 14.0282 5.54222 13.9799 5.39375Z"
                      fill="#F4C005"
                    />
                  </svg>
                </i>
                <i>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9799 5.39375C13.9317 5.24525 13.8033 5.13702 13.6488 5.1146L9.30878 4.48392L7.3678 0.551161C7.29873 0.411161 7.15613 0.32254 7.00002 0.32254C6.84389 0.32254 6.70132 0.411161 6.63222 0.551161L4.69115 4.48392L0.351171 5.1146C0.196707 5.13702 0.0683282 5.24525 0.020094 5.39372C-0.0281676 5.54223 0.0120823 5.70522 0.12389 5.81419L3.26425 8.87542L2.52302 13.198C2.49661 13.3519 2.55988 13.5074 2.68618 13.5991C2.75763 13.651 2.84226 13.6775 2.9273 13.6775C2.99259 13.6775 3.05811 13.6619 3.1181 13.6303L7 11.5895L10.8817 13.6303C11.0199 13.703 11.1874 13.6909 11.3137 13.5991C11.44 13.5073 11.5033 13.3518 11.4769 13.1979L10.7354 8.87542L13.8761 5.81416C13.9879 5.70522 14.0282 5.54222 13.9799 5.39375Z"
                      fill="#F4C005"
                    />
                  </svg>
                </i>
                <i>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9799 5.39375C13.9317 5.24525 13.8033 5.13702 13.6488 5.1146L9.30878 4.48392L7.3678 0.551161C7.29873 0.411161 7.15613 0.32254 7.00002 0.32254C6.84389 0.32254 6.70132 0.411161 6.63222 0.551161L4.69115 4.48392L0.351171 5.1146C0.196707 5.13702 0.0683282 5.24525 0.020094 5.39372C-0.0281676 5.54223 0.0120823 5.70522 0.12389 5.81419L3.26425 8.87542L2.52302 13.198C2.49661 13.3519 2.55988 13.5074 2.68618 13.5991C2.75763 13.651 2.84226 13.6775 2.9273 13.6775C2.99259 13.6775 3.05811 13.6619 3.1181 13.6303L7 11.5895L10.8817 13.6303C11.0199 13.703 11.1874 13.6909 11.3137 13.5991C11.44 13.5073 11.5033 13.3518 11.4769 13.1979L10.7354 8.87542L13.8761 5.81416C13.9879 5.70522 14.0282 5.54222 13.9799 5.39375Z"
                      fill="#F4C005"
                    />
                  </svg>
                </i>
                <i>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9799 5.39375C13.9317 5.24525 13.8033 5.13702 13.6488 5.1146L9.30878 4.48392L7.3678 0.551161C7.29873 0.411161 7.15613 0.32254 7.00002 0.32254C6.84389 0.32254 6.70132 0.411161 6.63222 0.551161L4.69115 4.48392L0.351171 5.1146C0.196707 5.13702 0.0683282 5.24525 0.020094 5.39372C-0.0281676 5.54223 0.0120823 5.70522 0.12389 5.81419L3.26425 8.87542L2.52302 13.198C2.49661 13.3519 2.55988 13.5074 2.68618 13.5991C2.75763 13.651 2.84226 13.6775 2.9273 13.6775C2.99259 13.6775 3.05811 13.6619 3.1181 13.6303L7 11.5895L10.8817 13.6303C11.0199 13.703 11.1874 13.6909 11.3137 13.5991C11.44 13.5073 11.5033 13.3518 11.4769 13.1979L10.7354 8.87542L13.8761 5.81416C13.9879 5.70522 14.0282 5.54222 13.9799 5.39375Z"
                      fill="#F4C005"
                    />
                  </svg>
                </i>
              </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-xl-2 offset-xl-5 col-sm-4 offset-sm-4 my-3">
            <button className="d-flex align-items-center btn">
              <div className="student_cricle">
                <img src="./images/down.png" alt="" />
              </div>
              <p>Еще</p>
            </button>
          </div>
        </div>
      </div>
      <ContactUsAnna/>
      <StyleQuestion/>
    </>
  );
}