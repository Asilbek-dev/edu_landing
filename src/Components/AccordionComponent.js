import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import '../css/Accordion.css'

const AccordionComponent = () => {
    const [plusMinus, setPlusMinus] = React.useState(true)
    return (
        <div id='accordion'>
            <Accordion className='mt-5'>
                <Card className='border-0 accordion__parent'>
                    <div className='accordion__border'>
                        <Card.Header className='accordion__header'>
                            <Accordion.Toggle
                                onClick={() => setPlusMinus(!plusMinus)}
                                as={Button}
                                eventKey='0'
                                className={
                                    plusMinus
                                        ? 'shadow-none accordion__btn '
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
                            <span className='accordion__title'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod?
                            </span>
                        </Card.Header>
                        <Accordion.Collapse eventKey='0'>
                            <Card.Body className='accordion__body'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation.
                            </Card.Body>
                        </Accordion.Collapse>
                    </div>
                </Card>
            </Accordion>
        </div>
    )
}

export default AccordionComponent
