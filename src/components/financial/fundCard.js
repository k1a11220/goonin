import React from "react";
import styled from "styled-components";
import { FundList } from "../../constants/fundList";
import SmCard from "../common/smCard";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const BankCard = styled(SmCard)``;

const FundCard = () => {
  return (
    <Container>
      <Wrapper>
        {FundList.map((data) => {
          return (
            <BankCard
              title={data.bank}
              detail={data.month_3}
              icon={data.icon}
              link={data.link}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default FundCard;
