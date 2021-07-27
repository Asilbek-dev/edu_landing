import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

const Gallery = () => {

    useEffect(() => {
        var prev = document.getElementById('gallery');
        prev.getElementsByClassName('swiper-button-prev')[0].innerHTML = '<button class="edu_landing_circle_button active"><div class="button_block"><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L3 7L8 12" stroke="white" stroke-width="3" stroke-linecap="round"/></svg></div></button>';

        var next = document.getElementById('gallery');
        next.getElementsByClassName('swiper-button-next')[0].innerHTML = '<button class="edu_landing_circle_button active"><div class="button_block"><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L7 7L2 12" stroke="white" stroke-width="3" stroke-linecap="round"/></svg></div></button>';
    }, [])

    return (
        <div id="gallery">
            <div className="container">
                <div className="title">
                    <h4>
                        Галерея
                    </h4>
                </div>
                <div className="carousel">
                    <Swiper id="gallery_swipper" spaceBetween={30} pagination={{ "clickable": true }} navigation={true} className="mySwiper">
                        {[...new Array(5)].map(() => {
                            return (
                                <SwiperSlide>
                                    <div className="carousel_container">
                                        <div className="row m-0">
                                            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                                                <img className="w-100" src="../images/uni/bg_uni2.png" alt="bg_uni" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Gallery
