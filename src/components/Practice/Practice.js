import React from "react";
import { Container, Jumbotron, Row, Col, Image } from "react-bootstrap";

import "./Practice.css";

const Practice = () => {
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
                        <h3 className="lawyer">Практика</h3>
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
                                ЭКОНОМИЧЕСКИЕ СПОРЫ ПО АДМИНИСТРАТИВНЫМ
                                ПРАВООТНОШЕНИЯМ ОТ 17 ИЮНЯ 2014
                            </h3>
                            <p>
                                Иск АО "Дальневосточная распределительная
                                сетевая компания" к ООО "Предприятие Зейские
                                электрические сети" был удовлетворен
                            </p>
                            <a
                                target="_blank"
                                href="https://kad.arbitr.ru/Card/a15e785e-e0dc-4acc-a031-fd4f5643d377"
                            >
                                Просмотреть решение
                            </a>
                        </Container>
                    </Jumbotron>
                    <Jumbotron className="service">
                        <Container>
                            <h3>ИСКОВОЕ ЗАЯВЛЕНИЕ ОТ 10 ДЕКАБРЯ 2015</h3>
                            <p>
                                Иск о признании членами семьи был удовлетворен
                            </p>
                            <a
                                target="_blank"
                                href="https://sudact.ru/regular/doc/GLdoBnKacGrw/?regular-txt=%D0%BF%D0%BE%D0%BA%D0%B0%D1%80%D0%B5%D0%B2&regular-case_doc=&regular-lawchunkinfo=&regular-doc_type=&regular-date_from=&regular-date_to=&regular-workflow_stage=&regular-area=1019&regular-court=&regular-judge=&_=1543134158298&snippet_pos=410#snippet"
                            >
                                Просмотреть решение
                            </a>
                        </Container>
                    </Jumbotron>
                    <Jumbotron className="service">
                        <Container>
                            <h3>СОЦИАЛЬНЫЕ СПОРЫ ОТ 13 МАЯ 2015</h3>
                            <p>
                                Иск о признании незаконным решения жилищной
                                комиссии был удовлетворен
                            </p>
                            <a
                                target="_blank"
                                href="https://sudact.ru/regular/doc/NBriBPnQegmZ/?regular-txt=%D0%BF%D0%BE%D0%BA%D0%B0%D1%80%D0%B5%D0%B2&regular-case_doc=&regular-lawchunkinfo=&regular-doc_type=&regular-date_from=&regular-date_to=&regular-workflow_stage=&regular-area=1019&regular-court=&regular-judge=&_=1543138516244&snippet_pos=1352#snippet"
                            >
                                Просмотреть решение
                            </a>
                        </Container>
                    </Jumbotron>
                    <Jumbotron className="service">
                        <Container>
                            <h3>УГОЛОВНОЕ ДЕЛО ОТ 13 СЕНТЯБРЯ 2018</h3>
                            <p>Прекращение уголовного дела</p>
                            <a
                                target="_blank"
                                href="https://bsr.sudrf.ru/bigs/portal.html#id=3_1238d367686ced9bbc6a783963c13d53&shard=%D0%92%D1%81%D0%B5%20%D0%B4%D0%B5%D0%BB%D0%B0&from=p&r={%22start%22:0,%22rows%22:10,%22uid%22:%22d0d69e73-1256-43de-87e2-309a75c32b8d%22,%22query%22:%22%D0%9F%D0%BE%D0%BA%D0%B0%D1%80%D0%B5%D0%B2%22,%22type%22:%22QUERY%22,%22mode%22:%22SIMPLE%22,%22customFilters%22:[{%22name%22:%22case_doc_subject_rf%22,%22operator%22:%22EX%22,%22query%22:%22%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9%22,%22type%22:%22FACET_FREE_FILTER%22,%22not%22:false},{%22name%22:%22case_doc_subject_rf%22,%22operator%22:%22EX%22,%22query%22:%22%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%8F%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9%22,%22type%22:%22FACET_FREE_FILTER%22,%22not%22:false}],%22sorts%22:[{%22field%22:%22score%22,%22order%22:%22desc%22}],%22simpleSearchFieldsBundle%22:%22default00%22,%22facet%22:{%22field%22:[%22type%22]},%22facetLimit%22:21,%22additionalFields%22:[%22court_document_documentype1%22,%22court_case_entry_date%22,%22court_case_result_date%22,%22court_subject_rf%22,%22court_name_court%22,%22court_document_law_article%22,%22court_case_result%22,%22case_user_document_type%22,%22case_user_doc_entry_date%22,%22case_user_doc_result_date%22,%22case_doc_subject_rf%22,%22case_user_doc_court%22,%22case_document_category_article%22,%22case_user_doc_result%22,%22case_user_entry_date%22,%22m_case_user_type%22,%22m_case_user_sub_type%22,%22ora_main_law_article%22],%22hlFragSize%22:1000,%22groupLimit%22:3,%22woBoost%22:false}"
                            >
                                Просмотреть решение
                            </a>
                        </Container>
                    </Jumbotron>
                    <Jumbotron className="service">
                        <Container>
                            <h3>УГОЛОВНОЕ ДЕЛО ОТ 22 ОКТЯБРЯ 2018</h3>
                            <p>Вынесен приговор условно</p>
                            <a
                                target="_blank"
                                href="https://bsr.sudrf.ru/bigs/portal.html#id=3_304d492c0e324458cf6f475abfe651b4&shard=%D0%92%D1%81%D0%B5%20%D0%B4%D0%B5%D0%BB%D0%B0&from=p&r={%22query%22:%22%D0%9F%D0%BE%D0%BA%D0%B0%D1%80%D0%B5%D0%B2%22,%22type%22:%22QUERY%22,%22mode%22:%22SIMPLE%22,%22customFilters%22:[{%22name%22:%22case_doc_subject_rf%22,%22operator%22:%22EX%22,%22query%22:%22%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9%22,%22type%22:%22FACET_FREE_FILTER%22,%22not%22:false},{%22name%22:%22case_doc_subject_rf%22,%22operator%22:%22EX%22,%22query%22:%22%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%8F%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9%22,%22type%22:%22FACET_FREE_FILTER%22,%22not%22:false}],%22sorts%22:[{%22field%22:%22score%22,%22order%22:%22desc%22}],%22simpleSearchFieldsBundle%22:%22default00%22}"
                            >
                                Просмотреть решение
                            </a>
                        </Container>
                    </Jumbotron>
                </Row>
            </Container>
        </>
    );
};

export default Practice;
