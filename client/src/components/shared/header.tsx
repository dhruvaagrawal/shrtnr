import { Link } from "@tanstack/react-router";
import { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="px-4 py-2 flex justify-between items-center gap-2">
      <Link to="/" className="text-2xl font-medium">
        shrtnr
      </Link>
      <div>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
