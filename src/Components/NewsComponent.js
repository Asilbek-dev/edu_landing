import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NewsComponent = () => {
    return (
        <div>
            <Card className='border-0 news__card'>
                <Card.Body>
                    <Row>
                        <Col lg={4}>
                            <div className='mb-2'>
                                <img src='images/image 35.png' className='news__img w-100' alt='' />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <h5 className='news__title'>
                                <Link to='/article'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore
                                </Link>
                            </h5>
                            <p className='news__text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit...;
                            </p>
                            <p className='news__info'>
                                <i className='fas fa-clock news__icon me-2'></i>Время чтения:{' '}
                                <b>10 минут</b>
                            </p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default NewsComponent
