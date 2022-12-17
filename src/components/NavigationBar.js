import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
        <Navbar variant="dark">
            <Container>
            <Navbar.Brand variant="violet">
                N-GAMES
            </Navbar.Brand>

                <Nav>
                <Nav.Link href="#trending">TRENDING</Nav.Link>
                <Nav.Link href="#topSeller">TOP SELLERS</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )

}

export default NavigationBar;