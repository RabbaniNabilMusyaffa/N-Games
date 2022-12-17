import {Card, Col, Container, Row, Image} from "react-bootstrap";
import tf2Image from '../assets/images/trending/tf2.jpeg';
import dbdImage from '../assets/images/top-sellers/dbd.jpeg';
import dotaImage from '../assets/images/top-sellers/dota2.jpeg';
import eldenRingImage from '../assets/images/top-sellers/elden-ring.jpeg';
import gtaImage from '../assets/images/top-sellers/gta.jpeg';
import rdrImage from '../assets/images/top-sellers/rdr.jpeg';


const TopSeller = () => {
return(
 <div>
 <Container>
     <br />
     
     <div className="trendTitle">
     <h1 className="text-center  ">TOP-SELLERS</h1>
     </div>
     <br/>
     <Row>
         <Col md={4} className="gameWrapper" id="topSeller">
             <Card className="text-center text-white bg-dark gameImage">
             <Image src={tf2Image} alt="Cyberpunk" className="imgSize" />
             <Card.Title className="mt-2 titleColor">Team Fortress 2</Card.Title>
             <Card.Text className="mb-2 priceColor">Free to Play</Card.Text>
             </Card>
         </Col>
         <Col md={4} className="gameWrapper">
             <Card className="text-center text-white bg-dark gameImage">
             <Image src={dbdImage} alt="Cyberpunk" className="imgSize" />
             <Card.Title className="mt-2 titleColor">Dead by Daylight</Card.Title>
             <Card.Text className="mb-2 priceColor">Rp 135.999</Card.Text>
             </Card>
         </Col>
         <Col md={4} className="gameWrapper">
             <Card className="text-center text-white bg-dark gameImage">
             <Image src={dotaImage} alt="Cyberpunk" className="imgSize" />
             <Card.Title className="mt-2 titleColor">Dota 2</Card.Title>
             <Card.Text className="mb-2 priceColor">Free to Play</Card.Text>
             </Card>
         </Col>
         <Col md={4} className="gameWrapper">
             <Card className="text-center text-white bg-dark gameImage">
             <Image src={eldenRingImage} alt="Cyberpunk" className="imgSize" />
             <Card.Title className="mt-2 titleColor">Elden Ring</Card.Title>
             <Card.Text className="mb-2 priceColor">Rp 599.000</Card.Text>
             </Card>
         </Col>
         <Col md={4} className="gameWrapper">
             <Card className="text-center text-white bg-dark gameImage">
             <Image src={gtaImage} alt="Cyberpunk" className="imgSize"/>
             <Card.Title className="mt-2 titleColor">Grand Theft Auto V</Card.Title>
             <Card.Text className="mb-2 priceColor">Rp 153.600</Card.Text>
             </Card>
         </Col>
         <Col md={4} className="gameWrapper">
             <Card className="text-center text-white bg-dark gameImage">
             <Image src={rdrImage} alt="Cyberpunk" className="imgSize" />
             <Card.Title className="mt-2 titleColor">Red Dead Redemption II</Card.Title>
             <Card.Text className="mb-2 priceColor">Rp 640.000</Card.Text>
             </Card>
         </Col>
     </Row>
 </Container>
 
</div>
)
}

export default TopSeller;