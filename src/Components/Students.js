import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import './../css/students.css'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/zoom/zoom.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

// import Swiper core and required modules
import SwiperCore, { Zoom, Navigation, Pagination } from 'swiper/core'

// install Swiper modules
SwiperCore.use([Zoom, Navigation, Pagination])



export default function Students() {
    return (
        <div id='students'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 student_theme'>
                        <p>Студенты</p>
                    </div>
                    <div className='row'>
                        {[...new Array(10)].map(index => (
                            <div className='col-xl-8 offset-xl-2 col-12 offset-0' key={index}>
                                <div className='student_card d-xl-flex p-2 d-block'>
                                    <Swiper
                                        style={{
                                            '--swiper-navigation-color': '#fff',
                                            '--swiper-pagination-color': '#fff',
                                            background: '#52BFFF',
                                            borderRadius: '20px',
                                        }}
                                        zoom={true}
                                        navigation={true}
                                        className='mySwiper'
                                    >
                                        {[...new Array(3)].map(() => (
                                            <SwiperSlide>
                                                <div className='swiper-zoom-container'>
                                                    <img src='./images/student.png' className='w-100' />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <div className='student_text'>
                                        <p>Александр Иванов</p>
                                        <div className='text_right d-flex'>
                                            <div style={{ marginRight: '8px' }}>
                                                <svg
                                                    width='14'
                                                    height='14'
                                                    viewBox='0 0 14 14'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        d='M13.9791 13.4617L13.2971 11.3928C13.7122 11.1949 13.9998 10.7712 13.9998 10.2816C13.9998 9.74687 13.6568 9.29099 13.1795 9.12168V4.38159L13.7724 4.08633C13.9115 4.0171 13.9995 3.87521 13.9998 3.71985C14 3.56448 13.9125 3.42232 13.7737 3.35262L7.1839 0.0440878C7.0681 -0.0140449 6.93163 -0.0140449 6.81583 0.0440878L0.226133 3.35262C0.0872816 3.42232 -0.000245576 3.56451 5.17586e-07 3.71985C0.000246611 3.87519 0.0882933 4.0171 0.227363 4.08633L2.46093 5.19849V7.82067C2.46093 7.93852 2.51163 8.05065 2.60006 8.12853C2.68091 8.1997 4.60741 9.87142 6.99991 9.87142C9.3924 9.87142 11.3189 8.1997 11.3998 8.12853C11.4882 8.05065 11.5389 7.93852 11.5389 7.82067V5.19849L12.3592 4.79003V9.12165C11.8818 9.29096 11.5389 9.74686 11.5389 10.2815C11.5389 10.7712 11.8265 11.1949 12.2415 11.3928L11.5595 13.4617C11.472 13.727 11.6702 14.0003 11.949 14.0003H13.5896C13.869 14.0002 14.0664 13.7264 13.9791 13.4617ZM10.7186 7.62549C10.2618 7.98079 8.74121 9.05113 6.99991 9.05113C5.25833 9.05113 3.73747 7.98049 3.28122 7.62554V5.60695L6.81709 7.36755C6.87464 7.39621 6.93729 7.41056 6.99991 7.41056C7.06252 7.41056 7.12517 7.39624 7.18273 7.36755L10.7186 5.60695L10.7186 7.62549ZM12.5161 13.1799L12.7693 12.4118L13.0225 13.1799H12.5161ZM12.7693 10.6917C12.5432 10.6917 12.3592 10.5077 12.3592 10.2816C12.3592 10.0554 12.5432 9.87142 12.7693 9.87142C12.9955 9.87142 13.1795 10.0554 13.1795 10.2816C13.1795 10.5077 12.9955 10.6917 12.7693 10.6917Z'
                                                        fill='#52BFFF'
                                                    />
                                                </svg>
                                            </div>
                                            <p>Название университета</p>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Ut enim ad minim veniam, quis nostrud
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
                <div className='row'>
                    <div className='col-12 col-xl-2 offset-xl-5 col-sm-4 offset-sm-4'>
                        <button className='d-flex align-items-center btn'>
                            <div className='student_cricle'>
                                <svg
                                    width='14'
                                    height='16'
                                    viewBox='0 0 14 16'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M13.9653 8.86969C13.9133 8.74508 13.792 8.66376 13.6574 8.66376H10.006V0.333232C10.006 0.149294 9.85667 0 9.67273 0H4.34117C4.15723 0 4.00794 0.149294 4.00794 0.333232V8.66379H0.342507C0.207895 8.66379 0.0865923 8.74511 0.0346097 8.86907C-0.0167169 8.99368 0.0112736 9.13698 0.106586 9.23229L6.75436 15.9021C6.817 15.9647 6.90166 16 6.99029 16C7.07891 16 7.16357 15.9647 7.22621 15.9027L13.8933 9.23295C13.9886 9.1376 14.0173 8.99434 13.9653 8.86969Z'
                                        fill='white'
                                    />
                                </svg>
                            </div>
                            <p>Еще</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
