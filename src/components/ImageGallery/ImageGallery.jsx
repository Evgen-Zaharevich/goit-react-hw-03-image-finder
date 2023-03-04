import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { FetchImages } from 'components/api/FetchImages';

export class ImageGallery extends Component {
  state = {};

  componentDidUpdate = (prevProps, prevState) => {
    const { value } = this.props;

    if (prevProps.value !== value) {
      FetchImages(value)
        .then(response => response.json())
        .then(images => console.log(images));

      //         const response = await fetchImages(
      //     searchQuery.value.trim().toLowerCase(),
      //     currentPage??????????
      //   );
    }
  };

  render() {
    return (
      <ul>
        <ImageGalleryItem />
      </ul>
    );
  }
}
