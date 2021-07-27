import React from 'react'
import './../css/service.css'

const text = [
    {
        images: './images/image 61 1.png',
        text: 'Поступление в зарубежные ВУЗы',
    },
    {
        images: './images/image 60.png',
        text: 'Оформление всех документов для поступления',
    },
    {
        images: './images/image 26.png',
        text: 'Помощь в оформлении и получении визы',
    },
    {
        images: './images/image 65.png',
        text: 'Организация переезда и размещения студента',
    },
    {
        images: './images/image 58.png',
        text: 'Организация языковых курсов и туристических поездок',
    },
    {
        images: './images/image 64.png',
        text: 'Оформление и перевод документов на иностранный язык',
    },
]

const ServiceComponent = () => {
    return (
        <div>
            <div id='service'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 service_theme text-center'>
                            <p>Услуги</p>
                        </div>
                    </div>
                    <div className='row service_cards'>
                        {text.map(({ images, text }) => (
                            <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
                                <div className='service_card mb-5'>
                                    <div className='service_border' key={images}>
                                        <img src={images} alt='' />
                                        <p>{text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceComponent
