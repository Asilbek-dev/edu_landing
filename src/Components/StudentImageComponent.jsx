import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, Container } from 'react-bootstrap'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import '../css/student_image.css'
import SwiperCore, { Navigation, Pagination } from 'swiper'

SwiperCore.use([Navigation, Pagination])

export default function StudentImageComponent() {
    return (
        <div id = "studentImage" style = {{marginTop: "280px", paddingBottom: "100px"}}>
            <Container>
                <div className="row">
                    <div className="co-12 city_slide_text">
                        <p>Фотографии наших студентов</p>
                        <p>Истории студентов <span>></span></p>
                    </div>
                </div>
                <div className='slider__relative'>
                    <Swiper
                        navigation={true}
                        pagination={{ clickable: true }}
                        className={'mySwiper'}
                        slidesPerView={4}
                        spaceBetween={20}
                        autoplay={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            776: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {[...new Array(10)].map((item, index) => (
                            <SwiperSlide key={index}>
                                <Card className='border-0 slider__card'>
                                    <Card.Body>
                                        <div className='mb-2'>
                                            <img
                                                src='images/image43.png'
                                                alt='slider image'
                                                className='slider__img'
                                            />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}
