import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../css/About.css'

const AboutComponent = () => {
    return (
        <div id='aboutus'>
            <Container>
            <div className='col-12 aboutus_theme'>
                <p>О нас</p>
            </div>
                <Row className='flex-column-reverse flex-lg-row'>
                    <Col lg={6} className='col-md-push-6'>
                        <div className='about-text'>
                            <p>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                            </p>
                        </div>
                    </Col>

                    <Col lg={6} className='col-md-pull-6 second-item'>
                        <div>
                            <img src='images/about-frame.png' className='w-100' alt='' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutComponent
