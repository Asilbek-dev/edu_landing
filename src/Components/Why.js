import React from 'react'
import '../css/why.css'

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
]

const Why = () => {
    return (
        <div>
            <div id='why'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 service_theme text-center'>
                            <p><span>Добро пожаловать</span> в нашу группу иностранного образования</p>
                            <p>Почему мы?</p>
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

export default Why
