import React, { useRef } from "react";
import styled from "styled-components";
import CompasIcon from "./Compas.svg";
import MoreIcon from "./More.svg";
import { Link } from "gatsby";
import { ACTIVE } from "../../../constants/constants";
import BenefitIcon from "./Icon/BenefitIcon";
import HomeIcon from "./Icon/HomeIcon";
// import useScrollCenter from "../../../hooks/useScrollCenter";

const Container = styled.div`
  width: 100vw;
  height: 90px;
  background-color: #fff;
  border-top: 1px solid #d0d4da;
  position: sticky;
  bottom: 0;
`;

const IconContainer = styled.div`
  display: flex;
  width: 700px;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.device.md}) {
    width: calc(100vw - 48px);
  }
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 64px;
  font-size: 12px;
  & p {
    color: ${(props) => props.fillColor};
    margin-top: 7px;
  }
`;

const Icon = styled.img`
  height: 23px;
  fill: white;
`;

const TabLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

const TabNavigation = ({ path }) => {
  console.log(BenefitIcon);
  return (
    <Container>
      <IconContainer>
        <TabLink to="/">
          <IconBox fillColor={path === "/" ? "#2A364E" : "#717989"}>
            <HomeIcon fillColor={path === "/" ? "#2A364E" : "#cccfd4"} />
            <p>홈</p>
          </IconBox>
        </TabLink>

        <TabLink
          to="/discount"
          isActive={path === "/discount" ? "#2A364E" : "#cccfd4"}
        >
          <IconBox fillColor={path === "/discount" ? "#2A364E" : "#717989"}>
            <BenefitIcon
              fillColor={path === "/discount" ? "#2A364E" : "#cccfd4"}
            />
            <p>혜택</p>
          </IconBox>
        </TabLink>

        <IconBox>
          <Icon src={CompasIcon} />
          <p>자기개발</p>
        </IconBox>

        <IconBox>
          <Icon src={MoreIcon} />
          <p>더보기</p>
        </IconBox>
      </IconContainer>
    </Container>
  );
};

export default TabNavigation;
