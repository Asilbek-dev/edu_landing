import React from 'react'
import { Container } from 'react-bootstrap'
import '../css/Card.css'

const CardUI = props => {
    return (
        <Container>
            <div className='card text-center'>
                <div className='overflow'>
                    <img className='cardItem' src={props.imgsrc} alt='image1' />
                    <div className='card-body text-dark'>
                        <h4 className='card-title'>Card Title</h4>
                        <p className='card-text text-secodary'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde
                            repellat culpa
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CardUI
