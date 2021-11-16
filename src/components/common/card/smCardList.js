import React from "react";
import styled from "styled-components";
import SmCard from "./smCard";

const Container = styled.div``;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SmCardList = ({ CardList }) => {
  return (
    <Container>
      <Wrapper>
        {CardList.map((data, index) => {
          return (
            <SmCard
              key={index}
              title={data.title}
              price={data.price}
              detail={data.detail}
              thumbnail={data.thumbnail}
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
