import React, { useState } from 'react'

const AcademicPrograms = () => {
    const [isShow, setIsShow] = useState([false, true]);

    const changeIsShowing = (index) => {
        let copyIsShow = [...isShow];
        copyIsShow[index] = !isShow[index];
        setIsShow(copyIsShow);
    }
    return (
        <div id="academic_programs">
            <div className="container">
                <div className="title">
                    <h4>
                        Академические программы
                    </h4>
                </div>
                <div className="program_container">
                    <div className="program_block">
                        <div className="collapse_title">
                            <h5>
                                Бакалавриат
                            </h5>
                        </div>
                        <div className={isShow[0] ? "collapse show" : "collapse"}>
                            <div className="collapse_block">
                                {[...new Array(5)].map(() => {
                                    return (
                                        <div className="architecture_block">
                                            {[...new Array(9)].map(() => {
                                                return (
                                                    <p>
                                                        Архитектура
                                                    </p>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="academic_button">
                            <button className={isShow[0] ? "edu_landing_circle_button active" : "edu_landing_circle_button"} onClick={() => changeIsShowing(0)}>
                                <div className="button_block">
                                    {
                                        isShow ? (
                                            <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 2H12" stroke="white" stroke-width="3" stroke-linecap="round" />
                                            </svg>
                                        ) : (
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 2V12M2 7H12" stroke="white" stroke-width="3" stroke-linecap="round" />
                                            </svg>
                                        )
                                    }
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="program_container">
                    <div className="program_block">
                        <div className="collapse_title">
                            <h5>
                                Магистратура
                            </h5>
                        </div>
                        <div className={isShow[1] ? "collapse show" : "collapse"}>
                            <div className="collapse_block">
                                {[...new Array(5)].map(() => {
                                    return (
                                        <div className="architecture_block">
                                            {[...new Array(9)].map(() => {
                                                return (
                                                    <p>
                                                        Архитектура
                                                    </p>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="academic_button">
                            <button className={isShow[1] ? "edu_landing_circle_button active" : "edu_landing_circle_button"} onClick={() => changeIsShowing(1)}>
                                <div className="button_block">
                                    {
                                        isShow ? (
                                            <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 2H12" stroke="white" stroke-width="3" stroke-linecap="round" />
                                            </svg>
                                        ) : (
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 2V12M2 7H12" stroke="white" stroke-width="3" stroke-linecap="round" />
                                            </svg>
                                        )
                                    }
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcademicPrograms
