export const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <form onSubmit={onSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          name="input"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
