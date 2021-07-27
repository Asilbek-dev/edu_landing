import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './../css/header.css'

import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'

import SwiperCore, { Pagination } from 'swiper/core'

SwiperCore.use([Pagination])

const Header2 = () => {
    return (
        <div className='header'>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                className='mySwiper'
            >
                {[...new Array(5)].map(() => (
                    <SwiperSlide>
                        <div className='container'>
                            <div className='row m-0'>
                                <div className='col-12 col-sm-12 col-md-10 col-lg-8'>
                                    <h1 className='title'>
                                        Грант и контрактное обучение в <span>зарубежных </span>{' '}
                                        вузах
                                    </h1>
                                    <p className='text'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip
                                        <img
                                            src='/images/arr.svg'
                                            className='d-none d-md-block'
                                            alt='vektor'
                                        />
                                    </p>

                                    <button>
                                        <div className='button-block'>
                                            <i>
                                                <svg
                                                    width='16'
                                                    height='16'
                                                    viewBox='0 0 16 16'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        d='M0.438615 6.78721C0.15595 6.02369 -0.0487379 5.24393 0.0129935 4.41543C0.0519818 3.90533 0.243674 3.46996 0.617311 3.11257C1.02344 2.72918 1.40682 2.32631 1.80645 1.93642C2.3263 1.42308 2.97935 1.42633 3.49919 1.93642C3.82085 2.25158 4.13925 2.57323 4.45765 2.89488C4.76631 3.20354 5.07822 3.5122 5.38687 3.8241C5.92946 4.37319 5.93271 5.01325 5.39012 5.55908C5.00024 5.94896 4.61361 6.3421 4.21723 6.72548C4.11326 6.8262 4.10351 6.91068 4.15874 7.03739C4.41867 7.6612 4.79555 8.21678 5.21793 8.73662C6.06917 9.78281 7.03088 10.712 8.17778 11.4301C8.42471 11.5828 8.69438 11.6965 8.95105 11.8362C9.08426 11.9077 9.17198 11.8849 9.2792 11.7745C9.66584 11.3748 10.0622 10.9817 10.4586 10.5886C10.9784 10.0752 11.6282 10.072 12.1481 10.5886C12.7849 11.2189 13.4185 11.8524 14.0488 12.4892C14.5784 13.0221 14.5751 13.6751 14.0423 14.2112C13.6816 14.5751 13.3015 14.9195 12.9636 15.2996C12.4697 15.852 11.8459 16.0339 11.1376 15.9949C10.1045 15.9397 9.15249 15.5953 8.23302 15.1502C6.19263 14.1592 4.45116 12.7849 2.99235 11.0499C1.91367 9.76332 1.02344 8.36624 0.438615 6.78721ZM15.2444 7.95036C15.6625 7.95036 16.0052 7.61037 15.9657 7.19415C15.6072 3.41333 12.5881 0.394283 8.80729 0.0356945C8.39106 -0.00378193 8.05107 0.338937 8.05107 0.757028C8.05107 1.17512 8.39153 1.50937 8.80676 1.55819C11.7523 1.90449 14.0969 4.24918 14.4432 7.19468C14.4921 7.60991 14.8263 7.95036 15.2444 7.95036ZM11.5698 7.1987C11.6561 7.60778 11.9867 7.95036 12.4048 7.95036C12.8229 7.95036 13.1677 7.60945 13.1062 7.1959C12.7767 4.98137 11.0201 3.22469 8.80553 2.89527C8.39199 2.83375 8.05107 3.17858 8.05107 3.59667C8.05107 4.01476 8.39365 4.34535 8.80273 4.43167C9.47728 4.574 10.0966 4.9079 10.5951 5.40638C11.0935 5.90486 11.4274 6.52415 11.5698 7.1987Z'
                                                        fill='white'
                                                    />
                                                </svg>
                                            </i>
                                            <span>Связаться с нами</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='header-bottom'>
                <div className='container d-flex'>
                    <div className='d-flex align-items-center' style={{ marginRight: '30px' }}>
                        <i>
                            <svg
                                width='16'
                                height='16'
                                viewBox='0 0 16 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M8 0C4.68632 0 2 2.78183 2 6.21349C2 9.64505 6.08898 16 8 16C9.91102 16 14 9.64505 14 6.21349C14 2.78183 11.3137 0 8 0ZM8 9.06138C6.25563 9.06138 4.84155 7.597 4.84155 5.79053C4.84155 3.98416 6.25563 2.51972 8 2.51972C9.74437 2.51972 11.1584 3.98416 11.1584 5.79053C11.1584 7.597 9.74437 9.06138 8 9.06138Z'
                                    fill='#52BFFF'
                                />
                            </svg>
                        </i>
                        <p>
                            <span>г. Город</span>
                            ул. Улица, 24 (Офис 24)
                        </p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <i>
                            <svg
                                width='16'
                                height='16'
                                viewBox='0 0 16 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M8 0C12.4113 0 16 3.58866 16 8C16 12.4113 12.4113 16 8 16C3.58866 16 0 12.4113 0 8C0 3.58866 3.58866 0 8 0ZM7.33334 8C7.33334 8.36866 7.63134 8.66666 8 8.66666H10.6667C11.0353 8.66666 11.3333 8.36866 11.3333 8C11.3333 7.63134 11.0353 7.33334 10.6667 7.33334H8.66666V3.33334C8.66666 2.96469 8.36866 2.66669 8 2.66669C7.63134 2.66669 7.33334 2.96469 7.33334 3.33334V8Z'
                                    fill='#52BFFF'
                                />
                            </svg>
                        </i>
                        <p>
                            <span>Пн-Пт 9:00 - 18:00</span>
                        </p>
                    </div>
                </div>
            </div>
            <img className = "d-xl-block d-none" src="./images/tree.png" alt="" />
        </div>
    )
}

export default Header2
