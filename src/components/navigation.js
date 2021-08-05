import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Nav = styled.nav`
  width: var(--width);
  border-radius: 25px;
  background-color: var(--white);
  margin: 0 auto;
  height: 80px;
  margin-top: 24px;
  border: 1px solid #cacaca;

  & > div {
    height: 100%;
    padding: 0 40px 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & * {
    text-decoration: none;
    list-style: none;
  }
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

const ItemWrapper = styled.ul`
  display: flex;
`;

const Item = styled.li`
  font-size: 18px;
  margin: 0 14px 0 14px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <div>
        <Logo>
          <Link to="/">군입대 가이드</Link>
        </Logo>
        <ItemWrapper>
          <Item>
            <Link to="/">금융혜택</Link>
          </Item>
          |
          <Item>
            <Link to="/discount">할인정보</Link>
          </Item>
          |
          <Item>
            <Link to="/military">입대정보</Link>
          </Item>
        </ItemWrapper>
      </div>
    </Nav>
  );
};

export default Navigation;
