import React from "react";
import { Container, Jumbotron, Row, Col, Image } from "react-bootstrap";

import "./Services.css";

const Services = () => {
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
                        <h3 className="lawyer">
                            Услуги
                        </h3>
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
                            <h3>
                                КОНСУЛЬТАЦИИ И РАЗЪЯСНЕНИЯ ПО ЮРИДИЧЕСКИМ
                                ВОПРОСАМ
                            </h3>
                        </Container>
                    </Jumbotron>
                    <Jumbotron className="service">
                        <Container>
                            <h3>
                                СОСТАВЛЕНИЕ ЗАЯВЛЕНИЙ, ЖАЛОБ И ИНЫХ ДОКУМЕНТОВ
                                ПРАВОВОГО ХАРАКТЕРА
                            </h3>
                        </Container>
                    </Jumbotron>
                    <Jumbotron className="service">
                        <Container>
                            <h3>
                                ПРЕДСТАВЛЕНИЕ ИНТЕРЕСОВ ДОВЕРИТЕЛЕЙ В СУДАХ , В
                                ТОМ ЧИСЛЕ НА СТАДИИ ИСПОЛНЕНИЯ СУДЕБНЫХ РЕШЕНИЙ,
                                А ТАКЖЕ В ГОСУДАРСТВЕННЫХ ОРГАНАХ, ИНЫХ
                                ОРГАНИЗАЦИЯХ И ПЕРЕД ФИЗИЧЕСКИМИ ЛИЦАМИ
                            </h3>
                        </Container>
                    </Jumbotron>
                    <Jumbotron className="service">
                        <Container>
                            <h3>
                                ЗАЩИТА ПО УГОЛОВНЫМ И АДМИНИСТРАТИВНЫМ ДЕЛАМ
                            </h3>
                        </Container>
                    </Jumbotron>
                    <Jumbotron className="service">
                        <Container>
                            <h3>КОНСУЛЬТАЦИИ ПО ВОПРОСАМ ЖИЛИЩНОГО ПРАВА</h3>
                        </Container>
                    </Jumbotron>
                    <Jumbotron className="service">
                        <Container>
                            <h3>
                                ПОМОЩЬ В РЕАЛИЗАЦИИ ГОСУДАРСТВЕННЫХ ЖИЛИЩНЫХ
                                СЕРТИФИКАТОВ (В ТОМ ЧИСЛЕ В СВЯЗИ С ПЕРЕСЕЛЕНИЕМ
                                ИЗ РАЙОНОВ КРАЙНЕГО СЕВЕРА)
                            </h3>
                        </Container>
                    </Jumbotron>
                    <Jumbotron className="service">
                        <Container>
                            <h3>СОПРОВОЖДЕНИЕ СДЕЛОК С НЕДВИЖИМОСТЬЮ</h3>
                        </Container>
                    </Jumbotron>
                </Row>
            </Container>
        </>
    );
};

export default Services;
