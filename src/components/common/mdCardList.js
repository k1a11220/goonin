import React from "react";
import styled from "styled-components";
import MdCard from "./mdCard";

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

const MdCardList = ({ CardList }) => {
  return (
    <Container>
      {CardList.map((data) => {
        return (
          <MdCard
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
