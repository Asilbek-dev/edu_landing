import React from 'react'
import { Container } from 'react-bootstrap'
import FooterTop from '../Components/FooterTop'
import ArticleSlideComponent from './../Components/ArticleSlideComponent'

const ArticleScreen = () => {
    return (
        <div>
            <div>
                <Container>
                    <ArticleSlideComponent />
                </Container>
            </div>
            <div>
                <FooterTop />
            </div>
        </div>
    )
}

export default ArticleScreen
