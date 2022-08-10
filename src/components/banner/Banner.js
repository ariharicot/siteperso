import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import plume from "../assets/plume.png";

const Banner = () => {
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Bienvenu(e) sur mon portfolio
                        </span>
                        <h1>{`Je suis Ariana Bredon`}
                            <span className="wrap">Développeur Web</span>
                        </h1>
                        <p>Ea anim veniam ea duis sunt cupidatat esse pariatur aliqua ad laboris. Amet consectetur mollit in dolor ullamco sunt proident cillum eiusmod esse amet exercitation irure sint. Laboris occaecat dolor anim ut amet adipisicing velit officia aliquip excepteur non laborum. Sunt proident est cupidatat fugiat. Dolor qui anim sunt exercitation tempor. Officia culpa laboris esse tempor cillum commodo duis.</p>
                        <button onClick={() => console.log()}>Me Contacter <ArrowCircleRightIcon /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={plume} alt="photo de plume"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner