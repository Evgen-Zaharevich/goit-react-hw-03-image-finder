import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { FetchImages } from 'components/api/FetchImages';
import { SearchBar } from 'components/SearchBar/SearchBar';

export class ImageGallery extends Component {
  state = {
    searchQuery: '',
    pictures: [],
    page: 1,
    error: null,
    showButton: false,
    empty: false,
  };

  getSearchQueryValue = searchQuery => {
    this.setState({
      searchQuery: searchQuery,
      pictures: [],
      page: 1,
      error: null,
      empty: false,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.getPictures(searchQuery, page);
    }
  };

  getPictures = async (searchQuery, page) => {
    const { pictures } = this.state;

    try {
      const { hits, total } = await FetchImages(searchQuery, page);
      const resultVisionButton = pictures.length !== total;

      if (hits.length === 0 && pictures.length === 0) {
        this.setState({ empty: true });
      }

      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...hits],
        showButton: resultVisionButton,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    const { pictures, error, showButton, empty, searchQuery } = this.state;

    return (
      <>
        <SearchBar searchQuery={this.getSearchQueryValue} />
        <ul className="gallery">
          {pictures.map(({ id, webformatURL, tags }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              tags={tags}
            />
          ))}
        </ul>
        {showButton && (
          <button type="button" onClick={this.loadMore}>
            Load more
          </button>
        )}
        {empty && (
          <p>
            Sorry. This query "{searchQuery}" is not valid, please try again.
          </p>
        )}
        {error && <p>Sorry. This {error}. </p>}
      </>
    );
  }
}
