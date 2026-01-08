import "./generalHeader.scss";
import logo from "../../assets/logo/carDekho.svg";
import SearchBar from "../SearchBar/SearchBar";

function GeneralHeader() {
  return (
    <header className="general-header">
      <nav className="general-header__nav">
        <ul className="general-header__nav-list">
          {/* Logo */}
          <li className="general-header__nav-item">
            <img src={logo} alt="CarDekho Logo" />
          </li>

          {/* Search */}
          <li className="general-header__nav-item">
            <SearchBar />
          </li>

          {/* Right section */}
          <li className="general-header__nav-item general-header__right">
            <ul className="header-right">
              {/* Language */}
              <li className="header-right__item header-right__lang">
                <span>English</span>
                <svg width="10" height="10" viewBox="0 0 24 24">
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="#333"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>

              {/* Wishlist */}
              <li className="header-right__item header-right__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"
                    stroke="#333"
                    strokeWidth="1.5"
                  />
                </svg>
              </li>

              {/* Login */}
              <li className="header-right__item header-right__login">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="#333" strokeWidth="1.5" />
                  <path
                    d="M4 20c0-4 4-6 8-6s8 2 8 6"
                    stroke="#333"
                    strokeWidth="1.5"
                  />
                </svg>
                <span>Login / Register</span>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default GeneralHeader;
