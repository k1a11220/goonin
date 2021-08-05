import React from "react";
import styled from "styled-components";
import { ComList } from "@src/constants/comList";
import SmCard from "@components/common/smCard";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const ComCard = () => {
  return (
    <Container>
      <Wrapper>
        {ComList.map((data) => {
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

export default ComCard;
