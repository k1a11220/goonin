import React from "react";
import styled from "styled-components";
import MdCard from "./mdCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.device.lg}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 710px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 350px) {
    grid-template-columns: 1fr;
  }
`;

const MdCardList = ({ CardList }) => {
  return (
    <Container>
      {CardList.map((data, index) => {
        return (
          <MdCard
            key={index}
            title={data.title}
            value={data.value}
            icon={data.icon}
            link={data.link}
          />
        );
      })}
    </Container>
  );
};

export default MdCardList;
