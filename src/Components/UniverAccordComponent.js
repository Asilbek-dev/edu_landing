import React, { useState } from 'react'
import { Card, Accordion, Button, Col, Row } from 'react-bootstrap'
import '../css/Accordion.css'
import '../css/UniverAccord.css'
import AccordionComponent from './AccordionComponent'

const UniverAccordComponent = () => {
    const [plusMinus, setPlusMinus] = useState(true)
    return (
        <div>
            <Accordion className='mt-5'>
                <Card className='border-0 accordion__parent'>
                    <div className='accordion__border'>
                        <Card.Header className='accordion__header  '>
                            <Accordion.Toggle
                                onClick={() => setPlusMinus(!plusMinus)}
                                as={Button}
                                eventKey='0'
                                className={
                                    plusMinus
                                        ? 'shadow-none accordion__btn univer__btn'
                                        : 'shadow-none accordion__btn color-dark'
                                }
                            >
                                <div className={plusMinus ? 'accordion__btn-inner' : null}>
                                    <span className='fw-bold accordion__plus'>
                                        {
                                            <i
                                                className={
                                                    plusMinus ? 'fas fa-plus' : 'fas fa-minus'
                                                }
                                            ></i>
                                        }
                                    </span>
                                </div>
                            </Accordion.Toggle>
                            <span className='accordion__title'>Бакалавриат</span>
                        </Card.Header>
                        <Accordion.Collapse eventKey='0'>
                            <Card.Body className='accordion__body'>
                                <Row>
                                    {[...new Array(5)].map(index => (
                                        <Col key={index}>
                                            <ul className='navbar-nav'>
                                                <li className='nav-item'>
                                                    <p className='nav-text'></p>
                                                </li>
                                                {[...new Array(7)].map(index => (
                                                    <li className='nav-item'>
                                                        <p className='nav-text'>Архитектура</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Col>
                                    ))}
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </div>
                </Card>
            </Accordion>
        </div>
    )
}

export default UniverAccordComponent
