import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const NavLink = ({ children, ...rest }) => {
  return (
    <Link {...rest}>
      <Button variant="link" whiteSpace="wrap" textAlign="left">
        {children}
      </Button>
    </Link>
  );
};

export default NavLink;
