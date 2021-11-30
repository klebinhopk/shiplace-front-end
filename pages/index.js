import Head from 'next/head'
import Image from 'next/image'
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { FaCaretRight } from 'react-icons/fa';

const Home = () => (
  <>
    <Head>
      <title>shiplace - Best shipping rates</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
    </Head>

    <div className="wrapper">
      <Navbar className="nav-principal" expand="lg">
        <Container className="container-fluid">
          <Navbar.Brand href="#home">
              <Image
                src="/Logo.png"
                width={190}
                height={83}
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="mx-4">How It Works</Nav.Link>
              <Nav.Link href="#link" className="mx-4">Shipping calculator</Nav.Link>
            </Nav>
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home" className="me-3">Log in</Nav.Link>
              <Nav.Link href="#link">Get Started</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className="retangleYellow"></div>
        </Container>
      </Navbar>

      <Container className="container-fluid">
        <Row className="pt-5">
          <Col className="col-12 col-md my-auto">

            <div className="retangleRed"></div>
            <div className="retangleYellow-centered"></div>

            <h1 className="display-2 font-weight-bolder title-slide">
              Shop any place Ship to your place
            </h1>

            <p className="lead">No subscription or hidden fees, and best shipping rates</p>

            <Form inline className="form-newsletter">
              <FormControl type="text" placeholder="enter your email" className="mr-sm-2" />
              <Button variant="outline-primary">Get Started</Button>
            </Form>

            <Row className="mt-5 position-relative icons-page">
              <Col className="col-auto mb-3">
                <span className="ellipse-button"><FaCaretRight size={28} /> <strong className="ms-3">Learn more</strong></span>
              </Col>

              <Col className="col-auto">
                <Row className="justify-content-center">
                  <Col className="col-auto mb-3">
                    <span className="buttons-categories oculos"><img src="/oculos.png"/></span>
                  </Col>
                  <Col className="col-auto mb-3">
                    <span className="buttons-categories camera"><img src="/camera.png"/></span>
                  </Col>
                  <Col className="col-auto mb-3">
                    <span className="buttons-categories tenis"><img src="/tenis.png"/></span>
                  </Col>
                  <Col className="col-auto mb-3">
                    <span className="buttons-categories more"><img src="/arrow-right.svg"/></span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col>
            <img src="/Illustration.png" className="rounded img-fluid w-100 illustration" alt="" />
            <div className="retangleBlue"></div>
          </Col>
        </Row>

      </Container>
    </div>
  </>
)

export default Home