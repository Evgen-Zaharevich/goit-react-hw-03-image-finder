import { Component } from 'react';
import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBar.styled';

export class SearchBar extends Component {
  state = {
    input: '',
  };

  onChange = e => {
    this.setState({ input: e.target.value.trim().toLowerCase() });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchQuery(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    const { input } = this.state;

    return (
      <Searchbar>
        <SearchForm onSubmit={this.onSubmit}>
          <SearchFormButton className="button">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            onChange={this.onChange}
            value={input}
            className="input"
            type="text"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Searchbar>
    );
  }
}
