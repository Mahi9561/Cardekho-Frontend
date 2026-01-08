import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const NavItem = ({ item }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="nav-item"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link to={item.route} className="nav-item__link">
        {item.label}
        {item.children?.length > 0 && <span className="arrow">▼</span>}
      </Link>

      {open && item.children?.length > 0 && <Dropdown items={item.children} />}
    </li>
  );
};

export default NavItem;
