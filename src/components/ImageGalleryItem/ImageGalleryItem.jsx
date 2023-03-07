import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import {
  ImageGalleryITEM,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    largeURL: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  clickOnImage = () => {
    const { largeImageURL } = this.props;

    this.setState({ largeURL: largeImageURL });
    this.toggleModal();
    return;
  };

  render() {
    const { webformatURL, tags } = this.props;
    const { showModal, largeURL } = this.state;

    return (
      <ImageGalleryITEM>
        <ImageGalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={this.clickOnImage}
        />
        {showModal && (
          <Modal
            largeURL={largeURL}
            tags={tags}
            toggleModal={this.toggleModal}
          />
        )}
      </ImageGalleryITEM>
    );
  }
}
