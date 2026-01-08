import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-bar__filter">
        <span>All</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="#555"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="search-bar__divider" />

      <div className="search-bar__input">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="11"
            cy="11"
            r="8"
            stroke="#888"
            strokeWidth="2"
          />
          <line
            x1="21"
            y1="21"
            x2="16.65"
            y2="16.65"
            stroke="#888"
            strokeWidth="2"
          />
        </svg>

        <input
          type="text"
          placeholder="Search or Ask a Question"
          className="input"
        />
      </div>
    </div>
  );
};

export default SearchBar;
