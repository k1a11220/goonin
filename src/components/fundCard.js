import React from "react";
import styled from "styled-components";
import { FundList } from "../constants/fundList";
import SmCard from "./smCard";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const BankCard = styled(SmCard)`
  &:nth-of-type(4n) {
    & div {
      margin-right: 0;
    }
  }
`;

const FundCard = () => {
  return (
    <Container>
      <Wrapper>
        {FundList.map((data) => {
          return (
            <BankCard
              title={data.bank}
              detail={data.month_3}
              icon={data.link}
              link={data.link}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default FundCard;
