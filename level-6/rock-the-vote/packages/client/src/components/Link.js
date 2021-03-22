import { Link as NavLink } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const Link = ({ children, variant, ...rest }) => {
  return (
    <NavLink {...rest}>
      <Button variant={variant || "link"} whiteSpace="wrap" textAlign="left">
        {children}
      </Button>
    </NavLink>
  );
};

export default Link;
