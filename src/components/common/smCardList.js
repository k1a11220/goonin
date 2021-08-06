import React from "react";
import styled from "styled-components";
import SmCard from "@components/common/smCard";

const Container = styled.div``;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.device.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.device.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SmCardList = ({ CardList }) => {
  return (
    <Container>
      <Wrapper>
        {CardList.map((data) => {
          return (
            <SmCard
              title={data.title}
              detail={data.price}
              icon={data.icon}
              link={data.link}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default SmCardList;
