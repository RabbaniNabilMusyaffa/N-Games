import {Card, Col, Container, Row, Image} from "react-bootstrap";
import cyberpunkImage from '../assets/images/top-sellers/cyberpunk.jpeg';
import csgoImage from '../assets/images/trending/csgo.jpeg';
import apexImage from '../assets/images/trending/apex-legends.jpeg';
import destiny2Image from '../assets/images/trending/destiny2.jpeg';
import newworldImage from '../assets/images/trending/new-world.jpeg';
import valheimImage from '../assets/images/trending/valheim.jpeg';


const Trending = () => {
    return(
        <div>
            <Container>
                <br />
                
                <div className="trendTitle">
                <h1 className="text-center  ">TRENDING GAMES</h1>
                </div>
                <br/>
                <Row>
                    
                    <Col md={4} className="gameWrapper" id="trending">
                        <Card className="text-center text-white bg-dark gameImage">
                        <Image src={cyberpunkImage} alt="Cyberpunk" className="imgSize" />
                        <Card.Title className="mt-2 titleColor">Cyberpunk 2077</Card.Title>
                        <Card.Text className="mb-2 priceColor">Rp 699.999</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="gameWrapper">
                        <Card className="text-center text-white bg-dark gameImage">
                        <Image src={csgoImage} alt="Cyberpunk" className="imgSize" />
                        <Card.Title className="mt-2 titleColor">Counter Strike : Global offensive</Card.Title>
                        <Card.Text className="mb-2 priceColor">Free to Play</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="gameWrapper">
                        <Card className="text-center text-white bg-dark gameImage">
                        <Image src={apexImage} alt="Cyberpunk" className="imgSize" />
                        <Card.Title className="mt-2 titleColor">Apex Legends</Card.Title>
                        <Card.Text className="mb-2 priceColor">Free to Play</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="gameWrapper">
                        <Card className="text-center text-white bg-dark gameImage">
                        <Image src={destiny2Image} alt="Cyberpunk" className="imgSize" />
                        <Card.Title className="mt-2 titleColor">Destiny 2</Card.Title>
                        <Card.Text className="mb-2 priceColor">Free to Play</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="gameWrapper">
                        <Card className="text-center text-white bg-dark gameImage">
                        <Image src={newworldImage} alt="Cyberpunk" className="imgSize"/>
                        <Card.Title className="mt-2 titleColor">New World</Card.Title>
                        <Card.Text className="mb-2 priceColor">Rp 249.999</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="gameWrapper">
                        <Card className="text-center text-white bg-dark gameImage">
                        <Image src={valheimImage} alt="Cyberpunk" className="imgSize" />
                        <Card.Title className="mt-2 titleColor">Valheim</Card.Title>
                        <Card.Text className="mb-2 priceColor">Rp 108.999</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Trending;