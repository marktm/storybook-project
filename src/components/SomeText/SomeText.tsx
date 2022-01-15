import React from "react";
import {LinkProps} from "./types";

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  props,
  ref
): JSX.Element {
  const {to = "#", target = "_self", children, ...other} = props;
  return (
    <a ref={ref} href="https://www.foo.com">
     Link
    </a>
  );
});

export default Link;
