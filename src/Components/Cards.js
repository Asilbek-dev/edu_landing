import React, { Component } from 'react'
import CardUI from './CardUI'
import img1 from '/images/121.png'
import img2 from '/images/image26.png'
import img3 from '/images/image29.png'

class Cards extends Component {
    render() {
        return (
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
                        <CardUI imgsrc={img1} />
                    </div>
                    <div className='col-md-4'>
                        <CardUI imgsrc={img2} />
                    </div>
                    <div className='col-md-4'>
                        <CardUI imgsrc={img3} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Cards
