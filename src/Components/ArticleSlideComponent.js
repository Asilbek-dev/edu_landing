import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Row, Col, Card } from 'react-bootstrap'
import '../css/ArticleSlide.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import '../css/CitySlide.css'
import SwiperCore, { Navigation, Pagination } from 'swiper'

SwiperCore.use([Navigation, Pagination])

const ArticleSlideComponent = () => {
    return (
        <div>
            <div className='slider__relative article__slide'>
                <Swiper
                    navigation={true}
                    pagination={{ clickable: true }}
                    className={'mySwiper'}
                    slidesPerView={1}
                    spaceBetween={20}
                    autoplay={true}
                >
                    {[...new Array(10)].map(index => (
                        <SwiperSlide key={index}>
                            <Row className='justify-content-center'>
                                <Col xs={12} sm={10}>
                                    <Card className='border-0 news__card'>
                                        <Card.Body>
                                            <Row>
                                                <Col lg={4}>
                                                    <div className='mb-2'>
                                                        <img
                                                            src='images/image 35.png'
                                                            className='news__img w-100'
                                                            alt=''
                                                        />
                                                    </div>
                                                </Col>
                                                <Col lg={8}>
                                                    <h5 className='news__title'>
                                                        Lorem ipsum dolor sit amet, consectetur
                                                        adipiscing elit, sed do eiusmod tempor
                                                        incididunt ut labore
                                                    </h5>
                                                    <p className='news__text'>
                                                        Lorem ipsum dolor sit amet, consectetur
                                                        adipiscing elit, sed do eiusmod tempor
                                                        incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud
                                                        exercitation. Lorem ipsum dolor sit amet,
                                                        consectetur adipiscing elit! Lorem ipsum
                                                        dolor sit amet, consectetur adipiscing
                                                        elit...;
                                                    </p>
                                                    <p className='news__info'>
                                                        <i className='fas fa-clock news__icon me-2'></i>
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
    )
}

export default ArticleSlideComponent
