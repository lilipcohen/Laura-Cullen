import React from "react";
import {
    Modal,
    ModalBody,
    Col,
    Row,
    Container,
    Card,
    CardImg,
    Button,
    
} from "reactstrap";

import ImageCarousel from "./ImageCarousel";


class ImageGallery extends React.Component {

    state = {
        isModalOpen: false,
        images: [],
        imagesToShow: 0,
        currentIndex: 0
    }




    static shareState(props, state) {
        const { images, limit } = this.props;
        const imagesToShow = props.hasOwnProperty("limit") ? limit : 4;
        return { images, imagesToShow };
    }

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
        const { images, limit } = this.props;
        const { isModalOpen, imagesToShow, currentIndex } = this.state;
        const tempImagesArray = images.slice(0, images);
        // const hasMore = images.length !== 0 ? images.length - imagesToShow : 0;
        console.log("ihmages", tempImagesArray)
        return <Container>

            <Row>
                <Col md={{ size: 10, offset: 1 }} className="thumbnail-gallery">
                    {/* <h5 className="text-center my-3">Reactstrap Image Gallery</h5> */}
                    
                    <Row>
                       
                        {images.map((image, index) => {
                            return (
                                <Col
                                    md="3"
                                    className="my-2"
                                    key={index}
                                    onClick={() => this.showModalImage(index)}
                                >
                                    <Card className="image-card">
                                        {console.log("path:", image.image)}
                                        <CardImg src={image.image} height="75vh"/>
                                        {/* {hasMore !== 0 && index === imagesToShow - 1 ? (
                                        <CardImgOverlay className="overlay">
                                            <h2 className="mb-0">{hasMore}</h2>
                                            <small> More </small>
                                        </CardImgOverlay>
                                    ) : null} */}
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