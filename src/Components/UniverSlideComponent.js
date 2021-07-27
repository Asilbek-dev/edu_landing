import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import '../css/UniverSlide.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import '../css/CitySlide.css'
import SwiperCore, { Navigation, Pagination } from 'swiper'

SwiperCore.use([Navigation, Pagination])

const UniverSlideComponent = () => {
    return (
        <div>
            <div className='slider__relative mt-5'>
                <Swiper
                    navigation={true}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    className={'mySwiper'}
                    slidesPerView={1}
                    autoplay={true}
                >
                    {[...new Array(10)].map(index => (
                        <SwiperSlide key={index}>
                            <div className='img-wrapper'>
                                <img
                                    src='images/image 36.png'
                                    width={850}
                                    alt='slider image'
                                    className='slider__img'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default UniverSlideComponent
