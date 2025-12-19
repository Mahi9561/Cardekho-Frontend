import { Link } from "react-router-dom";

type DropdownItem = {
  label: string;
  route: string;
};

type DropdownProps = {
  items?: DropdownItem[];
  className?: string;
  onItemClick?: (item: DropdownItem) => void;
};

export default function Dropdown({ items = [], className = "", onItemClick }: DropdownProps) {
  if (!items || items.length === 0) return null;

  return (
    <ul className={`cd-dropdown__list ${className}`} role="menu">
      {items.map((child) => (
        <li key={child.route} className="cd-dropdown__item" role="none">
          <Link
            to={child.route}
            className="cd-dropdown__link"
            role="menuitem"
            onClick={() => onItemClick?.(child)}
          >
            {child.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
