import React from "react";
import { Link } from "react-scroll";
const MobileNavLink = ({ href, link }) => {
  return (
    <li className="list-none cursor-pointer mr-8">
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="trasition-all duration-300 hover-line-through"
      >
        {link}
      </Link>
    </li>
  );
};

export default MobileNavLink;
