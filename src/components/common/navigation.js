import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "@src/store/themeContext";
import { Link } from "gatsby";
import ThemeIcon from "./themeIcon";

const Icon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  fill: var(--color-text);
  transform: translateY(-1px);
  transition: width 0.3s ease;
`;

const Nav = styled.nav`
  width: var(--width);
  border-radius: var(--main-radius);
  background-color: var(--card-color);
  margin: 0 auto;
  height: 80px;
  margin-top: var(--page-margin);

  /* @media (max-width: ${({ theme }) => theme.device.xs}) {
    text-align: center;
    height: 100%;
  } */

  & > div {
    height: 100%;
    padding: 0 var(--side-padding) 0 var(--side-padding);
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* @media (max-width: ${({ theme }) => theme.device.xs}) {
      flex-direction: column;
      padding: 20px 0 20px 0;
    } */
  }

  & * {
    text-decoration: none;
    list-style: none;
  }
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: 20px;
  }

  /* @media (max-width: ${({ theme }) => theme.device.xs}) {
    font-size: 20px;
    margin-bottom: 14px;
  } */
`;

const ItemWrapper = styled.ul`
  display: flex;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: 17px;
  margin: 0 14px 0 14px;
  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: 16px;
  }

  &:last-of-type {
    margin-right: 0;

    /* @media (max-width: ${({ theme }) => theme.device.xs}) {
      margin-right: 14px;
    } */
  }
`;

const Navigation = ({ themeToggler }) => {
  const theme = useContext(ThemeContext);
  return (
    <Nav>
      <div>
        <Logo>
          <Link to="/">현명한 군복무</Link>
        </Logo>
        <ItemWrapper>
          <Item>
            <Link to="/">금융</Link>
          </Item>
          |
          <Item>
            <Link to="/discount">할인 & 혜택</Link>
          </Item>
          <Item onClick={themeToggler} style={{ cursor: "pointer" }}>
            <Icon version="1.1" x="0px" y="0px" viewBox="0 0 24 24">
              <ThemeIcon theme={theme} />
            </Icon>
          </Item>
          {/* |
          <Item>
            <Link to="/military">입대정보</Link>
          </Item> */}
        </ItemWrapper>
      </div>
    </Nav>
  );
};

export default Navigation;
