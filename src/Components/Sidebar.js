import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './../css/sidebar.css'

const menus = [
    {
      title: "Главная",
      path_name: "/",
    },
    {
      title: "О нас",
      path_name: "/aboutus",
    },
    {
      title: "Услуги",
      path_name: "/service",
    },
    {
      title: "Университеты",
      path_name: "/university",
    },
    {
      title: "Студенты",
      path_name: "/students",
    },
    {
      title: "Новости",
      path_name: "/news",
    },
    {
      title: "Контакты",
      path_name: "/contact",
    },
  ];

const Sidebar = () => {
    const [sidebarCollapse, setSidebarCollapse] = useState(true)
    const [language, setLanguage] = useState('ru')

    let location = useLocation()

    return (
        <>
            <header>
                <nav
                    className='navbar navbar-inverse'
                    style={location.pathname !== '/' ? { backgroundColor: '#fff' } : null}
                >
                    <div className='container'>
                        <div class='navbar-header'>
                            <div className='brand-block'>
                                <a className='navbar-brand' href='#home'>
                                    <img
                                        src='/images/Callan Development Logo gradient21 1.png'
                                        alt='navbar_brand'
                                    />
                                </a>
                                <ul
                                    className='d-flex align-items-center m-0 p-0'
                                    style={{ listStyle: 'none' }}
                                >
                                    <li>
                                        <a
                                            href='https://instagram.com'
                                            className='nav-link'
                                            style={{ color: '#52BFFF' }}
                                        >
                                            <i class='fab fa-instagram'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='https://facebook.com'
                                            className='nav-link'
                                            style={{ color: '#52BFFF' }}
                                        >
                                            <i class='fab fa-facebook-f'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='https://youtube.com'
                                            className='nav-link'
                                            style={{ color: '#52BFFF' }}
                                        >
                                            <i class='fab fa-youtube'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <button
                                class='navbar-toggle'
                                onClick={() => setSidebarCollapse(!sidebarCollapse)}
                            >
                                <span className='sr-only'>Toggle navigation</span>
                                {sidebarCollapse ? (
                                    <img src='/images/menu.png' alt='navbar_toggle' />
                                ) : (
                                    <img src='/images/x.png' alt='navbar_toggle' />
                                )}
                            </button>
                        </div>
                        <div className={sidebarCollapse ? 'navbar-collapse' : 'navbar-collapse show'}>
                            <ul className='router-link'>
                                <li className='language-li-1'>
                                    <ul className='language-block'>
                                        <li
                                            className={
                                                language === 'ru' ? 'language active' : 'language'
                                            }
                                        >
                                            <button onClick={() => setLanguage('ru')}>РУС</button>
                                        </li>
                                        <li
                                            className={
                                                language === 'uz' ? 'language active' : 'language'
                                            }
                                        >
                                            <button onClick={() => setLanguage('uz')}>UZ</button>
                                        </li>
                                    </ul>
                                </li>
                                {menus.map(({path_name, title}) => (
                                    <li
                                    className={
                                        location.pathname === path_name ? 'nav-item active' : 'nav-item'
                                    }
                                >
                                    <Link to={path_name} className='nav-link'>
                                        {title}
                                    </Link>
                                    <div className='active_line'>
                                        <img
                                            className='w-100'
                                            src='/images/image 231.png'
                                            alt='active'
                                            style={{ height: '24px' }}
                                        />
                                    </div>
                                    </li>
                                ))}
            
                                <li className='language-li-2'>
                                    <ul className='language-block'>
                                        <li
                                            className={
                                                language === 'ru' ? 'language active' : 'language'
                                            }
                                        >
                                            <button onClick={() => setLanguage('ru')}>РУС</button>
                                        </li>
                                        <li
                                            className={
                                                language === 'uz' ? 'language active' : 'language'
                                            }
                                        >
                                            <button onClick={() => setLanguage('uz')}>UZ</button>
                                        </li>
                                    </ul>
                                </li>
                                <li className='submit_your_application'>
                                    <Link to='/application'>
                                        <button className='z'>
                                            <i>
                                                <svg
                                                    width='14'
                                                    height='14'
                                                    viewBox='0 0 14 14'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        d='M7 0C3.14217 0 0 3.12649 0 6.99959C0 8.19735 0.31106 9.36395 0.902171 10.4061L0.0466149 12.9726C-0.0467184 13.2526 0.0310597 13.5637 0.233282 13.7659C0.464178 13.9736 0.75123 14.0625 1.02662 13.9526L3.59333 13.097C4.6355 13.6881 5.80222 13.9992 7 13.9992C10.8733 13.9992 14 10.8571 14 6.99965C14 3.12649 10.8733 0 7 0V0ZM3.88889 7.77733C3.46884 7.77733 3.11111 7.41962 3.11111 6.99959C3.11111 6.56412 3.46884 6.22186 3.88889 6.22186C4.32439 6.22186 4.66667 6.56412 4.66667 6.99959C4.66667 7.41962 4.32439 7.77733 3.88889 7.77733ZM7 7.77733C6.57995 7.77733 6.22222 7.41962 6.22222 6.99959C6.22222 6.56412 6.57995 6.22186 7 6.22186C7.4355 6.22186 7.77778 6.56412 7.77778 6.99959C7.77778 7.41962 7.4355 7.77733 7 7.77733ZM10.1111 7.77733C9.69106 7.77733 9.33333 7.41962 9.33333 6.99959C9.33333 6.56412 9.69106 6.22186 10.1111 6.22186C10.5466 6.22186 10.8889 6.56412 10.8889 6.99959C10.8889 7.41962 10.5466 7.77733 10.1111 7.77733Z'
                                                        fill='white'
                                                    />
                                                </svg>
                                            </i>
                                            Оставить заявку
                                        </button>
                                    </Link>
                                </li>
                                <li className='sidebar-header-bottom'>
                                    <div className='header-bottom'>
                                        <div
                                            className='d-flex align-items-center'
                                            style={{ marginRight: '30px' }}
                                        >
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
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Sidebar
