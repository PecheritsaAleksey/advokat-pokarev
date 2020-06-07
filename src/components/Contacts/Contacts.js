import React from "react";
import { Container, Jumbotron, Row, Col, Image } from "react-bootstrap";

const Contacts = () => {
    return (
        <>
            <Container className="on-image">
                <Row>
                    <Col lg="4">
                        <h1 className="name">Покарев Алексей Васильевич</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg="4" className="lawyer-background">
                        <h3 className="lawyer">Контакты</h3>
                    </Col>
                </Row>
            </Container>
            <div>
                <Image
                    src={require("../../static/images/banner2.jpg")}
                    className="big-image"
                />
            </div>
            <Container className="info">
                <Row>
                    <Jumbotron className="service">
                        <Container>
                            <h3>КОНТАКТНЫЕ ТЕЛЕФОНЫ:</h3>
                            <p>+7(914) 550 60 70</p>
                            <p>+7(913) 571 25 35</p>
                        </Container>
                    </Jumbotron>
                    <Jumbotron className="service">
                        <Container>
                            <h3>ЭЛЕКТРОННАЯ ПОЧТА:</h3>
                            <p>alexei.pokarev@yandex.ru</p>
                        </Container>
                    </Jumbotron>
                    <Jumbotron className="service">
                        <Container>
                            <h3>ВРЕМЯ РАБОТЫ:</h3>
                            <p>С 8-00 до 20-00</p>
                            <p>без выходных</p>
                        </Container>
                    </Jumbotron>
                </Row>
            </Container>
        </>
    );
};

export default Contacts;
