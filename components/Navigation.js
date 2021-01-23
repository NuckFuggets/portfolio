import Link from "next/link";
import { motion } from "framer-motion";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  color: ${(props) => (props.light ? "#fff" : "#01022e")};
  font-size: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

const LinkSpacer = styled.span`
  margin-left: 32px;
  display: inline-block;
`;

const ActiveMenuItem = styled.span`
  border-bottom: 1px solid black;
  padding-bottom: 4px;
  border-color: ${(props) => (props.light ? "#fff" : "#01022e")};
`;

const routes = [
  {
    route: "/",
    name: "Home",
  },
  {
    route: "/work",
    name: "Work",
  },
  {
    route: "/contact",
    name: "Contact",
  },
];

export default function Navigation({ currentRoute = "", light = false }) {
  const routesLength = routes.length;

  const navItems = routes.map(({ route, name }, index) => {
    let navItem = (
      <div key={route}>
        <Link key={route} href={route}>
          {route == currentRoute ? (
            <ActiveMenuItem light={light}>{name}</ActiveMenuItem>
          ) : (
            name
          )}
        </Link>
        {routesLength != index + 1 ? <LinkSpacer></LinkSpacer> : ""}
      </div>
    );

    return navItem;
  });

  return <Nav light={light}>{navItems}</Nav>;
}
