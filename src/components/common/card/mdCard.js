import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* height: 184px; */
  background-color: var(--card-color-1);
  border-radius: var(--card-radius);
  transition: all 0.2s ease-in-out;

  /* &:hover {
    transform: scale(1.02);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  } */
`;

const Wrapper = styled.div`
  width: calc(100% - 36px);
  padding: 18px;

  & h3 {
    font-size: 18px;
    margin-bottom: 4px;
  }

  & p {
    color: var(--color-text-2);
    font-weight: 500;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  background-color: var(--highlight-color);
  border-radius: 16px 16px 0 0;
`;

const MdCard = ({ title, value, icon, link }) => {
  return (
    <Container>
      <Thumbnail src={icon} />
      <Wrapper>
        <h3>{title}</h3>
        <p>{value}</p>
      </Wrapper>
    </Container>
  );
};

export default MdCard;
