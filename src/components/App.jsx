import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { LoadMore } from 'components/Button/Button';

export class App extends Component {
  state = {
    searchImages: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.input.value;
    this.setState({ searchImages: inputValue });
  };

  render() {
    const { searchImages } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery value={searchImages} />
        <LoadMore />
      </>
    );
  }
}
