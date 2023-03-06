import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer, Image } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.closeModal);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ code, target, currentTarget }) => {
    if (code === 'Escape') {
      console.log('Click ESC');
      this.props.toggleModal();
    }

    if (target === currentTarget) {
      this.props.toggleModal();
    }
  };

  render() {
    const { largeURL, tags, toggleModal } = this.props;
    return createPortal(
      <Overlay onClick={this.closeModal}>
        <ModalContainer>
          <Image src={largeURL} alt={tags} onClick={toggleModal} />
        </ModalContainer>
      </Overlay>,
      modalRoot
    );
  }
}
