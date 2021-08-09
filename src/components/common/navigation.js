import React, { useContext, useState } from "react";
import styled from "styled-components";
import ThemeContext from "@src/store/themeContext";
import { Link } from "gatsby";
import ThemeIcon from "./themeIcon";

const Navbar = styled.nav`
  width: var(--width);
  height: 80px;
  border-radius: var(--main-radius);
  margin: 0 auto;
  margin-top: var(--page-margin);
  background-color: var(--card-color);

  & a {
    text-decoration: none;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    /* border-bottom: solid 1px var(--border); */
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: auto;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  margin: auto;
  padding: 0 var(--side-padding) 0 var(--side-padding);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;

  & sup {
    color: var(--color-text-2);
    font-weight: 400;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: 20px;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex: 1;
  overflow-y: hidden;
  max-height: 100%;
  justify-content: space-between;
  transition: 0.44s 0.2s cubic-bezier(0.52, 0.16, 0.24, 1),
    height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: 100%;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    max-height: 0;
    border-bottom: solid 1px var(--border);

    &.expanded {
      max-height: 100vh;
      height: auto;
    }
  }
`;

const StyledBurger = styled.button`
  display: none;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    display: flex;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 1.5rem;
    height: 0.125rem;
    background: var(--color-text);
    border-radius: 10px;
    transition: 0.44s 0.2s cubic-bezier(0.52, 0.16, 0.24, 1),
      height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ clicked }) => (clicked ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-of-type(2) {
      opacity: ${({ clicked }) => (clicked ? "0" : "1")};
      transform: ${({ clicked }) =>
        clicked ? "translateX(10px)" : "translateX(0)"};
    }

    :nth-of-type(3) {
      transform: ${({ clicked }) => (clicked ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  background-color: var(--card-color);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    flex-direction: column;
  }

  &:last-of-type {
    padding: 20px 0 20px 20px;
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: 17px;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: 100%;
    font-size: 16px;
    margin-bottom: 32px;
  }

  &:last-of-type {
    margin-right: 0;
    margin-bottom: 0;
  }
`;

const Divider = styled.p`
  margin: 0 14px;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    display: none;
  }
`;

const Icon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  fill: var(--color-text);
  transform: translateY(-1px);
  transition: width 0.3s ease;
`;

const Navigation = ({ themeToggler }) => {
  const theme = useContext(ThemeContext);
  const [clicked, setClicked] = useState(true);
  const click = () => {
    setClicked(!clicked);
  };

  return (
    <Navbar>
      <Container>
        <Wrapper>
          <Logo>
            <Link to="/">
              군복무 가이드 <sup>beta</sup>
            </Link>
          </Logo>
          <ItemContainer className={clicked ? null : "expanded"}>
            <ItemWrapper></ItemWrapper>
            <ItemWrapper>
              <Item>
                <Link to="/">금융</Link>
              </Item>
              <Divider>I</Divider>
              <Item>
                <Link to="/discount">혜택</Link>
              </Item>
              <Divider>I</Divider>
              <Item
                onClick={themeToggler}
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  position: "relative",
                  top: "1px",
                }}
              >
                <Icon version="1.1" x="0px" y="0px" viewBox="0 0 24 24">
                  <ThemeIcon theme={theme} />
                </Icon>
              </Item>
            </ItemWrapper>
          </ItemContainer>
          <StyledBurger clicked={!clicked} onClick={click}>
            <div />
            <div />
            <div />
          </StyledBurger>
        </Wrapper>
      </Container>
    </Navbar>
  );
};

export default Navigation;

/*
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
  }

  & > div {
    height: 100%;
    padding: 0 var(--side-padding) 0 var(--side-padding);
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* @media (max-width: ${({ theme }) => theme.device.xs}) {
      flex-direction: column;
      padding: 20px 0 20px 0;
    } 
  }

  & * {
    text-decoration: none;
    list-style: none;
  }
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;

  & sup {
    color: var(--color-text-2);
    font-weight: 400;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: 20px;
  }

  /* @media (max-width: ${({ theme }) => theme.device.xs}) {
    font-size: 20px;
    margin-bottom: 14px;
  } 
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
    } 
  }
`;

const Navigation = ({ themeToggler }) => {
  const theme = useContext(ThemeContext);
  return (
    <Nav>
      <div>
        <Logo>
          <Link to="/">
            군복무 가이드 <sup>beta</sup>
          </Link>
        </Logo>
        <ItemWrapper>
          <Item>
            <Link to="/">금융</Link>
          </Item>
          |
          <Item>
            <Link to="/discount">혜택</Link>
          </Item>
          <Item onClick={themeToggler} style={{ cursor: "pointer" }}>
            <Icon version="1.1" x="0px" y="0px" viewBox="0 0 24 24">
              <ThemeIcon theme={theme} />
            </Icon>
          </Item>
          {/* |
          <Item>
            <Link to="/military">입대정보</Link>
          </Item> 
        </ItemWrapper>
      </div>
    </Nav>
  );
};

export default Navigation;
*/
