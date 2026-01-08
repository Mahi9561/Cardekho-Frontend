import NavItem from "./NavItem";
import "./header.scss";
import navMenu from "../navMenu.config";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__menu">
          {navMenu.map((item: { id: any; }) => (
            <NavItem key={item.id} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
