import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import {Typewriter} from "../Typewriter/Typewriter";
import {CoruscatingGem} from "../CoruscatingGem/CoruscatingGem";

import FoxMiner from "../../../../assets/images/splash/FoxMinesGemPower.gif";

import { useTranslation } from "react-i18next";

import "./Banner.scss";
export const Banner = () => {
    const { t  } = useTranslation();
    return (
        <Container>
            <Row className={"splashRow"}>
                <Col lg={6} md={6} sm={12} className={""}>
                    <h2 className="welcomeFromAuthor">
                        {t('authorIntroduction')}
                    </h2>
                    <div className="foxMinesGems">
                        <img
                            src={`${FoxMiner}`}
                            className="img-fluid foxMinesGemPower"
                            alt="Anthropomorphic Fox Mining Crystals To Power The Crystal"
                        />
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} className={"mt-5 text-center align-content-center crystalAndTypewrite"}>
                    <CoruscatingGem/>
                    <Typewriter/>
                </Col>
                <Col lg={12} md={12} sm={12} className={"landing-subheader"}>
                    <h4 className="banner-heading">
                        {t('welcomeMsg')}
                    </h4>
                </Col>
            </Row>
        </Container>
    )
};