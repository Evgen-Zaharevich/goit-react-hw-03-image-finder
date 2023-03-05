import { Component } from 'react';

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
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.onChange}
            value={input}
            className="input"
            type="text"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
