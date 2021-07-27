import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './../css/footer.css'

const Footer = () => {
    let location = useLocation()
    return (
        <div id='footer'>
            <div className='footer-block'>
                <div className='container'>
                    <div className='row m-0'>
                        <div className='col-12'>
                            <div className='footer_1'>
                                <div className='f-11'>
                                    <div className='f-111'>
                                        <img
                                            src='/images/footer_1.png'
                                            className='w-100'
                                            alt='footer_1'
                                        />
                                    </div>
                                </div>
                                <div className='f-112'>
                                    <img
                                        src='/images/footer_2.png'
                                        className='w-100'
                                        alt='footer_2'
                                    />
                                </div>
                                <div className='f-12'>
                                    <ul className='nav justify-content-center'>
                                        <li
                                            className={
                                                location.pathname === '/'
                                                    ? 'nav-item active'
                                                    : 'nav-item'
                                            }
                                        >
                                            <Link to='/' className='nav-link'>
                                                Главная
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                location.pathname === '/aboutus'
                                                    ? 'nav-item active'
                                                    : 'nav-item '
                                            }
                                            style={{ minWidth: '55px' }}
                                        >
                                            <Link to='/aboutus' className='nav-link'>
                                                О нас
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                location.pathname === '/service'
                                                    ? 'nav-item active'
                                                    : 'nav-item'
                                            }
                                        >
                                            <Link to='/service' className='nav-link'>
                                                Услуги
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                location.pathname === '/university'
                                                    ? 'nav-item active'
                                                    : 'nav-item'
                                            }
                                        >
                                            <Link to='/university' className='nav-link'>
                                                Университеты
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                location.pathname === '/students'
                                                    ? 'nav-item active'
                                                    : 'nav-item'
                                            }
                                        >
                                            <Link to='/students' className='nav-link'>
                                                Студенты
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                location.pathname === '/news'
                                                    ? 'nav-item active'
                                                    : 'nav-item'
                                            }
                                        >
                                            <Link to='/news' className='nav-link'>
                                                Новости
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                location.pathname === '/contact'
                                                    ? 'nav-item active'
                                                    : 'nav-item'
                                            }
                                        >
                                            <Link to='/contact' className='nav-link'>
                                                Контакты
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='f-13'>
                                    <span>
                                        <svg
                                            width='21'
                                            height='21'
                                            viewBox='0 0 21 21'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                fill-rule='evenodd'
                                                clip-rule='evenodd'
                                                d='M14.6908 0H5.59936C2.51194 0 0.00012207 2.51194 0.00012207 5.59936V14.6908C0.00012207 17.7784 2.51194 20.2902 5.59936 20.2902H14.6908C17.7785 20.2902 20.2903 17.7782 20.2903 14.6908V5.59936C20.2904 2.51194 17.7785 0 14.6908 0ZM10.1451 4.91683C7.26222 4.91683 4.91686 7.26219 4.91686 10.1451C4.91686 13.0279 7.26222 15.3731 10.1451 15.3731C13.028 15.3731 15.3734 13.0279 15.3734 10.1451C15.3734 7.26219 13.028 4.91683 10.1451 4.91683ZM10.1451 13.5728C8.25499 13.5728 6.71711 12.0351 6.71711 10.145C6.71711 8.25472 8.25487 6.71695 10.1451 6.71695C12.0354 6.71695 13.5732 8.25472 13.5732 10.145C13.5732 12.0351 12.0353 13.5728 10.1451 13.5728ZM14.6601 3.77681C14.9051 3.53078 15.2458 3.39036 15.5926 3.39036C15.9407 3.39036 16.2815 3.53078 16.5264 3.77681C16.7724 4.02164 16.9128 4.36249 16.9128 4.71054C16.9128 5.05738 16.7724 5.39823 16.5264 5.64426C16.2803 5.8891 15.9407 6.03072 15.5926 6.03072C15.2458 6.03072 14.905 5.8891 14.6601 5.64426C14.4141 5.39823 14.2725 5.0575 14.2725 4.71054C14.2725 4.36249 14.414 4.02164 14.6601 3.77681Z'
                                                fill='#52BFFF'
                                            />
                                        </svg>
                                    </span>
                                    <span>
                                        <svg
                                            width='12'
                                            height='23'
                                            viewBox='0 0 12 23'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M8.13721 4.71541C8.16807 4.68052 8.31236 4.56654 8.87902 4.56654L10.5974 4.56585C11.2018 4.56585 11.6933 4.07331 11.6933 3.46782V1.10252C11.6933 0.498069 11.2025 0.00552645 10.5992 0.00449022L8.83395 0C7.13071 0 6.11028 0.118984 5.0742 1.18403C4.04277 2.24424 3.49749 3.72428 3.49749 5.4639V7.66221H1.38636C0.781949 7.66221 0.290283 8.15476 0.290283 8.76024V11.376C0.290283 11.9814 0.781949 12.474 1.38636 12.474H3.49749V21.0944C3.49749 21.6998 3.98915 22.1924 4.59356 22.1924H6.92959C7.53401 22.1924 8.02567 21.6998 8.02567 21.0944V12.4742H10.6062C11.2106 12.4742 11.7021 11.9814 11.7021 11.3763L11.7035 8.76042C11.7035 8.36269 11.4875 7.99466 11.1396 7.80003C10.9784 7.70988 10.7909 7.66221 10.5974 7.66221H8.02567V5.38842C8.02567 4.93664 8.08635 4.77309 8.13721 4.71541Z'
                                                fill='#52BFFF'
                                            />
                                        </svg>
                                    </span>
                                    <span>
                                        <svg
                                            width='25'
                                            height='22'
                                            viewBox='0 0 25 22'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M10.0934 14.2307C9.91111 14.4035 9.80055 14.6386 9.78368 14.8892L9.46822 19.5747C9.42934 20.1521 9.93934 20.6479 10.3579 20.2482C10.4226 20.1864 10.486 20.12 10.5516 20.0511L12.7031 17.8799C13.0586 17.5211 13.6257 17.4837 14.0252 17.7927L19.0737 21.6967C20.1279 22.3171 20.8706 21.9904 21.155 20.6726L24.9278 2.00428C24.9279 2.00379 24.9282 2.00335 24.9285 2.00299C24.9289 2.00263 24.9291 2.00216 24.9292 2.00168C25.2631 0.356646 24.3653 -0.28659 23.3384 0.117045L1.16075 9.0831C-0.352826 9.7035 -0.329909 10.5945 0.903454 10.9982L6.11372 12.7095C6.40406 12.8049 6.72207 12.7622 6.97704 12.5938L19.7435 4.15842C20.3633 3.72503 20.9268 3.96483 20.4633 4.39822L10.0934 14.2307Z'
                                                fill='#52BFFF'
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <hr />
                            <div className='f-31'>
                                <ul className='nav justify-content-center'>
                                    <li>
                                        <div
                                            className={
                                                location.pathname === '/'
                                                    ? 'nav-item active'
                                                    : 'nav-item'
                                            }
                                        >
                                            <Link to='/' className='nav-link'>
                                                Главная
                                            </Link>
                                        </div>
                                        <div
                                            className={
                                                location.pathname === '/aboutus'
                                                    ? 'nav-item active'
                                                    : 'nav-item '
                                            }
                                            style={{ minWidth: '55px' }}
                                        >
                                            <Link to='/aboutus' className='nav-link'>
                                                О нас
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div
                                            className={
                                                location.pathname === '/service'
                                                    ? 'nav-item active'
                                                    : 'nav-item'
                                            }
                                        >
                                            <Link to='/service' className='nav-link'>
                                                Услуги
                                            </Link>
                                        </div>
                                        <div
                                            className={
                                                location.pathname === '/university'
                                                    ? 'nav-item active'
                                                    : 'nav-item'
                                            }
                                        >
                                            <Link to='/university' className='nav-link'>
                                                Университеты
                                            </Link>
                                        </div>
                                        <div
                                            className={
                                                location.pathname === '/students'
                                                    ? 'nav-item active'
                                                    : 'nav-item'
                                            }
                                        >
                                            <Link to='/students' className='nav-link'>
                                                Студенты
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div
                                            className={
                                                location.pathname === '/news'
                                                    ? 'nav-item active'
                                                    : 'nav-item'
                                            }
                                        >
                                            <Link to='/news' className='nav-link'>
                                                Новости
                                            </Link>
                                        </div>
                                        <div
                                            className={
                                                location.pathname === '/contact'
                                                    ? 'nav-item active'
                                                    : 'nav-item'
                                            }
                                        >
                                            <Link to='/contact' className='nav-link'>
                                                Контакты
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='footer_2'>
                                <div className='footer_21'>
                                    <span>
                                        <img src='/images/footer_2.png' alt='footer_2' />
                                    </span>
                                </div>
                                <div className='location'>
                                    <p className='order-3 order-lg-1'>
                                        <span className='icon'>
                                            <svg
                                                width='16'
                                                height='16'
                                                viewBox='0 0 16 16'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    d='M0.438371 6.78733C0.155706 6.02381 -0.048982 5.24405 0.0127494 4.41555C0.0517376 3.90545 0.24343 3.47008 0.617067 3.11269C1.02319 2.72931 1.40658 2.32643 1.80621 1.93655C2.32605 1.4232 2.97911 1.42645 3.49895 1.93655C3.8206 2.2517 4.13901 2.57335 4.45741 2.89501C4.76607 3.20366 5.07797 3.51232 5.38663 3.82423C5.92922 4.37331 5.93247 5.01337 5.38988 5.5592C5 5.94909 4.61336 6.34222 4.21698 6.7256C4.11301 6.82632 4.10327 6.9108 4.1585 7.03751C4.41842 7.66132 4.79531 8.2169 5.21768 8.73675C6.06892 9.78293 7.03064 10.7122 8.17754 11.4302C8.42447 11.5829 8.69413 11.6966 8.95081 11.8363C9.08402 11.9078 9.17174 11.885 9.27896 11.7746C9.66559 11.375 10.062 10.9818 10.4584 10.5887C10.9782 10.0753 11.628 10.0721 12.1478 10.5887C12.7847 11.219 13.4182 11.8526 14.0485 12.4894C14.5781 13.0222 14.5749 13.6753 14.042 14.2113C13.6814 14.5752 13.3012 14.9196 12.9633 15.2998C12.4695 15.8521 11.8457 16.034 11.1374 15.9951C10.1042 15.9398 9.15225 15.5954 8.23277 15.1503C6.19239 14.1594 4.45091 12.785 2.9921 11.05C1.91343 9.76344 1.0232 8.36636 0.438371 6.78733ZM15.2442 7.95048C15.6623 7.95048 16.005 7.61049 15.9655 7.19427C15.6069 3.41345 12.5879 0.394405 8.80704 0.0358166C8.39082 -0.00365986 8.05083 0.339059 8.05083 0.75715C8.05083 1.17524 8.39128 1.50949 8.80651 1.55831C11.752 1.90461 14.0967 4.2493 14.443 7.1948C14.4918 7.61003 14.8261 7.95048 15.2442 7.95048ZM11.5695 7.19882C11.6558 7.60791 11.9864 7.95048 12.4045 7.95048C12.8226 7.95048 13.1674 7.60957 13.1059 7.19603C12.7765 4.98149 11.0198 3.22481 8.80528 2.89539C8.39174 2.83387 8.05083 3.1787 8.05083 3.5968C8.05083 4.01489 8.39341 4.34548 8.80249 4.43179C9.47704 4.57412 10.0963 4.90802 10.5948 5.4065C11.0933 5.90498 11.4272 6.52427 11.5695 7.19882Z'
                                                    fill='url(#paint0_linear)'
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id='paint0_linear'
                                                        x1='20.3805'
                                                        y1='-15.0943'
                                                        x2='-9.66381'
                                                        y2='29.6556'
                                                        gradientUnits='userSpaceOnUse'
                                                    >
                                                        <stop stop-color='#B1E2FF' />
                                                        <stop offset='1' stop-color='#68C7FF' />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span className='font-weight-bold'>
                                            +998 (99) 878-63-99
                                        </span>
                                        <span className='font-weight-bold'>
                                            +998 (99) 878-63-99
                                        </span>
                                    </p>
                                    <p className='order-1 order-lg-2'>
                                        <span className='icon'>
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
                                        </span>
                                        <span className='font-weight-bold'>Пн-Пт 9:00 - 18:00</span>
                                    </p>
                                    <p className='order-2 order-lg-3'>
                                        <span className='icon'>
                                            <svg
                                                width='12'
                                                height='16'
                                                viewBox='0 0 12 16'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    d='M6 0C2.68632 0 0 2.78183 0 6.21349C0 9.64505 4.08898 16 6 16C7.91102 16 12 9.64505 12 6.21349C12 2.78183 9.31373 0 6 0ZM6 9.06138C4.25563 9.06138 2.84155 7.597 2.84155 5.79053C2.84155 3.98416 4.25563 2.51972 6 2.51972C7.74437 2.51972 9.15845 3.98416 9.15845 5.79053C9.15845 7.597 7.74437 9.06138 6 9.06138Z'
                                                    fill='#52BFFF'
                                                />
                                            </svg>
                                        </span>
                                        <span className='font-weight-bold'>г. Город</span>
                                        <span>ул. Улица, 24 (Офис 24)</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
