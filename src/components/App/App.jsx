import { Component } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { AppContainer } from './App.styled';

export class App extends Component {
  state = {};

  render() {
    return (
      <AppContainer>
        <ImageGallery />
      </AppContainer>
    );
  }
}
