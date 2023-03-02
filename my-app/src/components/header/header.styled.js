import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 1200px;
  padding: 0 16px;
  margin: 0 auto;
`;

export const HeaderStyled = styled.header`
  position: fixed;
  z-index: 1;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Logo = styled.div`
  align-self: center;
`;

export const LogoIcon = styled.img``;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const NavBarList = styled.ul`
  display: flex;
  gap: 54px;
  align-self: center;
`;

export const NavBarItem = styled.li`
  list-style: none;
`;

export const NavBarLink = styled(Link)`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 55px;
  text-decoration: none;
  color: #ffffff;
`;

export const LinkedIn = styled.div`
  display: flex;
`;

export const LinkedInLogo = styled.img`
  align-self: center;
`;
