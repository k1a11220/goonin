import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Nav = styled.nav`
  width: var(--width);
  border-radius: var(--main-radius);
  background-color: var(--card-color);
  margin: 0 auto;
  height: 80px;
  margin-top: var(--page-margin);

  @media (max-width: ${({ theme }) => theme.device.xs}) {
    text-align: center;
    height: 100%;
  }

  & > div {
    height: 100%;
    padding: 0 var(--side-padding) 0 var(--side-padding);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.device.xs}) {
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
  font-size: 22px;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.device.xs}) {
    font-size: 20px;
    margin-bottom: 14px;
  }
`;

const ItemWrapper = styled.ul`
  display: flex;
`;

const Item = styled.li`
  font-size: 18px;
  margin: 0 14px 0 14px;
  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: 16px;
  }

  &:last-of-type {
    margin-right: 0;

    @media (max-width: ${({ theme }) => theme.device.xs}) {
      margin-right: 14px;
    }
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
            <Link to="/">금융</Link>
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
