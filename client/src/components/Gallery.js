import React, { Component } from "react";
import { render } from "react-dom";
import { Parallax } from "react-parallax";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import imageBank from "../images.json";
import creativespace from "../images/creativespace.png";
import gaslight from "../images/gaslight.JPG";
import red from "../images/red.JPG";
import ImageGallery from "./ImageGallery";
import "../styles/Gallery.css";


class Gallery extends Component {

    constructor() {
        super();
        this.state = {
            images: []
        };
    }

    componentDidMount() {
        this.setState({ images: imageBank });
    }

    render() {
        const { images } = this.state
        return (
            <>
                <Parallax bgImage={creativespace} strength={500}>
                    <div style={{ height: 800 }}>
                        <div className="title">Gallery</div>
                    </div>
                </Parallax>
                <Container className="container">
                    <Row className="desc">
                        <Col md="6">
                            <div className="first-series">
                                <h1>Gaslight</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div>
                                <ImageGallery images={images} />
                            </div>
                        </Col>
                        {<Col md="6" className="carousel">
                            <img src={gaslight} alt="gaslight" id="gaslight" />



                        </Col>}

                    </Row>


                </Container>

                <Parallax bgImage={creativespace} strength={500}>
                    <div style={{ height: 800 }}>
                        <div className="title"></div>
                    </div>
                </Parallax>

                <Container>
                    <Row className="desc">
                        <Col md="6">
                            <div className="first-series">
                                <h1>Tokyo</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            
                                <div>
                                    <ImageGallery images={images} />
                                </div>
                        </Col>
                            {<Col md="6" className="carousel">
                                <img src={red} alt="red" id="red" />



                            </Col>}

                    </Row>


                </Container>

            </>
        )
    }
}




export default Gallery;