import React from "react";
import {
    Modal,
    ModalBody,
    Col,
    Row,
    Container,
    Card,
    CardImg
    
} from "reactstrap";

import ImageCarousel from "./ImageCarousel";



class ImageGallery extends React.Component {

    state = {
        isModalOpen: false,
        images: [],
        imagesToShow: 0,
        currentIndex: 0
    }




    // static shareState(props, state) {
    //     const { images, limit } = this.props;
    //     const imagesToShow = props.hasOwnProperty("limit") ? limit : 4;
    //     return { images, imagesToShow };
    // }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    showModalImage = imageId => {
        this.toggleModal();
        this.setState({
            currentIndex: imageId
            
        })
       
    }


    render() {
        const { images } = this.props;
        const { isModalOpen, imagesToShow, currentIndex } = this.state;
        
    
        
        
        return <Container>

            <Row>
                <Col className="thumbnail-gallery">
                    <Row>
                       
                        {images.map((image, index) => {
                            console.log(image)
                            return (
                                <Col
                                
                                    // md="3"
                                    className="my-2"
                                    key={index}
                                    onClick={() => this.showModalImage(index)}
                                    
                                >
                                    
                                    <Card className="image-card">
                                        <CardImg src={image.image} height="75vh"/>
                                        
                                    </Card>

                                </Col>

                            )

                        })}
                    </Row>
                </Col>
            </Row>

            <Modal
                className="modal-xl"
                isOpen={isModalOpen}
                toggle={this.toggleModal}
            >
                <ModalBody>
                    <Row>
                        <Col md="12">
                            <ImageCarousel images={images} currentIndex={currentIndex} />
                        </Col>
                    </Row>
                </ModalBody>

            </Modal>
        </Container>
    }
}









export default ImageGallery;