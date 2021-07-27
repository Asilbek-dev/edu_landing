import React from 'react'
import AccordionComponent from '../Components/AccordionComponent'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../Components/Header'
import FooterTop from '../Components/FooterTop'
import MainPageCenterScreen from './MainPageCenterScreen'

// const arr = [
//     { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?' },
//     { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?' },
//     { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?' },
//     { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?' },
// ]

const MainPageScreen = () => {
    return (
        <div>
            <div id='header'>
                <Header />
                <img id='bg_header_image' src='/images/Group2.png' alt='bg-image' />
            </div>
            <MainPageCenterScreen/>
            <div>
                <FooterTop />
            </div>
        </div>
    )
}

export default MainPageScreen
