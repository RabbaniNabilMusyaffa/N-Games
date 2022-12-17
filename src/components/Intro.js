import { Col, Container, Row, Button } from "react-bootstrap"

const Intro = () => {
    return (
        <div className="intro">
            <Container className="text-white d-flex justify-content-center align-items-center text-center">
                <Row>
                    <Col>
                    <div className="title">IMMERSIVE GAMING</div>
                    <div className="title">TANPA PUSING</div>
                    <div className="introBtn mt-4 text-center">
                        <Button href="#trending" variant="dark">Lihat Catalog</Button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro;