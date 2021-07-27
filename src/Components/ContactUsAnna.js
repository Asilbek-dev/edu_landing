import React from 'react'
import MaskedInput from 'react-text-mask'
import './../css/contactUsAnna.css'

const ContactUsAnna = () => {
    return (
        <div style={{ paddingTop: '100px', overflow: 'hidden' }}>
            <div id='contact-us-anna' style={{ backgroundImage: 'url("/images/bg_image.png")' }}>
                <div className='container'>
                    <div className='row m-0'>
                        <div className='col-12 offset-0 col-sm-12 col-md-8 offset-md-4 col-lg-6 offset-lg-6'>
                            <div className='about-card'>
                                <div className='card-block'>
                                    <h4>Связатся с нами</h4>
                                    <div className='d-flex justify-content-center'>
                                        <p>
                                            Оставьте свои данные и наш специалист обязательно
                                            свяжемся с Вами в течение дня
                                        </p>
                                    </div>

                                    <div className='input-group'>
                                        <div class='input-group-prepend'>
                                            <span class='input-group-text rounded-left-10 rounded-right-0 border-right-0 bg-prepend h-100'>
                                                <svg
                                                    width='12'
                                                    height='13'
                                                    viewBox='0 0 12 13'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        d='M5.71289 0.000244141C3.82284 0.000244141 2.28516 1.53793 2.28516 3.42798C2.28516 5.31803 3.82284 6.85571 5.71289 6.85571C7.60294 6.85571 9.14062 5.31803 9.14062 3.42798C9.14062 1.53793 7.60294 0.000244141 5.71289 0.000244141Z'
                                                        fill='#BED8E8'
                                                    />
                                                    <path
                                                        d='M9.97765 9.09504C9.03922 8.14218 7.79515 7.61743 6.47461 7.61743H4.95117C3.63066 7.61743 2.38657 8.14218 1.44813 9.09504C0.514287 10.0432 0 11.2948 0 12.6194C0 12.8297 0.170523 13.0002 0.380859 13.0002H11.0449C11.2553 13.0002 11.4258 12.8297 11.4258 12.6194C11.4258 11.2948 10.9115 10.0432 9.97765 9.09504Z'
                                                        fill='#BED8E8'
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                        <input
                                            type='text'
                                            className='form-control rounded-right-10 bg-input'
                                            placeholder='Ваше имя'
                                        />
                                    </div>
                                    <div className='input-group'>
                                        <div class='input-group-prepend'>
                                            <span class='input-group-text rounded-left-10 rounded-right-0 bg-prepend h-100'>
                                                <svg
                                                    width='12'
                                                    height='13'
                                                    viewBox='0 0 12 13'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        d='M5.71289 0.000244141C3.82284 0.000244141 2.28516 1.53793 2.28516 3.42798C2.28516 5.31803 3.82284 6.85571 5.71289 6.85571C7.60294 6.85571 9.14062 5.31803 9.14062 3.42798C9.14062 1.53793 7.60294 0.000244141 5.71289 0.000244141Z'
                                                        fill='#BED8E8'
                                                    />
                                                    <path
                                                        d='M9.97765 9.09504C9.03922 8.14218 7.79515 7.61743 6.47461 7.61743H4.95117C3.63066 7.61743 2.38657 8.14218 1.44813 9.09504C0.514287 10.0432 0 11.2948 0 12.6194C0 12.8297 0.170523 13.0002 0.380859 13.0002H11.0449C11.2553 13.0002 11.4258 12.8297 11.4258 12.6194C11.4258 11.2948 10.9115 10.0432 9.97765 9.09504Z'
                                                        fill='#BED8E8'
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                        <MaskedInput
                                            className='form-control rounded-right-10 bg-input'
                                            placeholder='+998 (____) ___ - __ - __'
                                            mask={[
                                                '+',
                                                '9',
                                                '9',
                                                '8',
                                                ' ',
                                                '(',
                                                ' ',
                                                /[1-9]/,
                                                /\d/,
                                                ' ',
                                                ')',
                                                ' ',
                                                /\d/,
                                                /\d/,
                                                /\d/,
                                                '-',
                                                /\d/,
                                                /\d/,
                                                '-',
                                                /\d/,
                                                /\d/,
                                            ]}
                                        />
                                    </div>
                                    <div className='input-group'>
                                        <div class='input-group-prepend'>
                                            <span
                                                class='input-group-text rounded-left-10 rounded-right-0 border-right-0 bg-prepend h-100 align-items-start'
                                                style={{ paddingTop: '12px' }}
                                            >
                                                <svg
                                                    width='12'
                                                    height='13'
                                                    viewBox='0 0 12 13'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        d='M5.71289 0.000244141C3.82284 0.000244141 2.28516 1.53793 2.28516 3.42798C2.28516 5.31803 3.82284 6.85571 5.71289 6.85571C7.60294 6.85571 9.14062 5.31803 9.14062 3.42798C9.14062 1.53793 7.60294 0.000244141 5.71289 0.000244141Z'
                                                        fill='#BED8E8'
                                                    />
                                                    <path
                                                        d='M9.97765 9.09504C9.03922 8.14218 7.79515 7.61743 6.47461 7.61743H4.95117C3.63066 7.61743 2.38657 8.14218 1.44813 9.09504C0.514287 10.0432 0 11.2948 0 12.6194C0 12.8297 0.170523 13.0002 0.380859 13.0002H11.0449C11.2553 13.0002 11.4258 12.8297 11.4258 12.6194C11.4258 11.2948 10.9115 10.0432 9.97765 9.09504Z'
                                                        fill='#BED8E8'
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                        <textarea
                                            className='form-control .rounded-right-10 border-left-0 bg-input'
                                            placeholder='Дополнительные комментарии'
                                        />
                                    </div>
                                    <div className='button_contact_us'>
                                        <button className='edu_landing_button about-send'>
                                            <div className='button_block'>
                                                <i>
                                                    <svg
                                                        width='16'
                                                        height='14'
                                                        viewBox='0 0 16 14'
                                                        fill='none'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                    >
                                                        <path
                                                            d='M0.00760714 0.000488281L0 5.33381L6.85714 6.85763L0 8.38145L0.00760714 13.7148L16 6.85763L0.00760714 0.000488281Z'
                                                            fill='white'
                                                        />
                                                    </svg>
                                                </i>
                                                <span>Отправить</span>
                                            </div>
                                        </button>
                                    </div>
                                    <div>
                                        <img
                                            className='about_anna_pen'
                                            src='/images/pen.png'
                                            alt='pen'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsAnna
