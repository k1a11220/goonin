import React from "react";
import styled from "styled-components";
import SmCard from "@components/common/smCard";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
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
