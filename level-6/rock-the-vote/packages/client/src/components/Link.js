import { Link as NavLink } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const Link = ({ children, ...rest }) => {
  return (
    <NavLink {...rest}>
      <Button variant="link" whiteSpace="wrap" textAlign="left">
        {children}
      </Button>
    </NavLink>
  );
};

export default Link;
