import React from 'react'
import './../css/about_university.css'

const AboutUniversity = () => {
    return (
        <div id='about_university'>
            <div className='container'>
                <div className='row m-0'>
                    <div className='col-12 col-md-6 col-lg-8 mb-4'>
                        <div className='title'>
                            <h4>О ВУЗе</h4>
                        </div>
                        <div className='about_body'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-sm-2 p-md-5 pt-0'>
                        <div className='title'>
                            <h4 style={{ textAlign: 'center' }}>Документы для поступления</h4>
                        </div>
                        <div className='about_documentation'>
                            {[...new Array(6)].map(() => {
                                return (
                                    <p>
                                        <i>
                                            <svg
                                                width='20'
                                                height='20'
                                                viewBox='0 0 20 20'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    d='M10 0C4.47714 0 0 4.47714 0 10C0 15.5229 4.47714 20 10 20C15.5229 20 20 15.5229 20 10C20 4.47714 15.5229 0 10 0ZM10 17.7778C5.70443 17.7778 2.22224 14.2955 2.22224 10C2.22224 5.70448 5.70443 2.22224 10 2.22224C14.2956 2.22224 17.7778 5.70443 17.7778 10C17.7778 14.2956 14.2956 17.7778 10 17.7778Z'
                                                    fill='#52BFFF'
                                                />
                                                <path
                                                    d='M13.4402 5.92621L8.82516 11.0892L6.51937 8.87584L4.98047 10.479L8.9474 14.287L15.097 7.40715L13.4402 5.92621Z'
                                                    fill='#52BFFF'
                                                />
                                            </svg>
                                        </i>
                                        <span>Название документа</span>
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUniversity
