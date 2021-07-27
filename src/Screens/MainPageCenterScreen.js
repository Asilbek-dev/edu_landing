import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AccordionComponent from "../Components/AccordionComponent";
import CitySlideComponent from "../Components/CitySlideComponent";
import StudentImageComponent from "../Components/StudentImageComponent";
import UserSlideComponent from "../Components/UserSlideComponent";
import Why from "../Components/Why";

const MainPageCenterScreen = () => {
  return (
    <>
      <div
        style={{
          background: "url('./images/bg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Why />
        <CitySlideComponent />
        <UserSlideComponent />
        <StudentImageComponent/>
        <Container>
                    <Row className={'mt-5 py-5'} style={{ marginRight: 0}}>
                        {[...new Array(4)].map(index => (
                            <Col md={6} key={index}>
                                <AccordionComponent />
                            </Col>
                        ))}
                    </Row>
                </Container>
      </div>
      ;
    </>
  );
};
export default MainPageCenterScreen;
