import React from "react";
import styled from "styled-components";
import { Container, ContentsWrapper, Wrapper } from "@styles/styles";

import Layout from "@layout/layout";

import LgCard from "@components/common/card/lgCard";
import MdCardList from "@components/common/card/mdCardList";
import FundPage from "@components/financial/FundPage";

import { SalaryList } from "../constants/salaryList";

import SEO from "../components/seo";

const NaraCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.device.md}) {
    overflow-x: scroll;
  }
`;

const IndexPage = (props) => {
  return (
    <Layout path={props.uri}>
      <SEO
        title="군복무 가이드 | 금융정보"
        desc="군인들에게 제공되는 금융혜택 & 상품입니다."
        defer={false}
      />
      <Container>
        <Wrapper>
          <ContentsWrapper>
            <h2>💵 월급</h2>
            <MdCardList CardList={SalaryList} />
          </ContentsWrapper>
          <ContentsWrapper>
            <h2>💳 나라사랑카드</h2>
            <NaraCard>
              <LgCard
                title="KB국민은행"
                link="https://card.kbcard.com/CXPRICAC0076.cms?mainCC=a&cooperationcode=04120"
                color="#ffbc00"
                service_1="대중교통"
                discount_1="20%"
                service_2="스타벅스"
                discount_2="20%"
                service_3="G마켓, 옥션, GS · CJ 홈쇼핑"
                discount_3="5%"
                service_4="군마트(PX, GS25 해군마트)"
                discount_4="5 ~ 20%"
              />
              <LgCard
                title="IBK기업은행"
                link="https://www.bccard.com/app/card/CreditCardMain.do?gdsno=1000024028"
                color="#1B4D98"
                service_1="대중교통"
                discount_1="10%"
                service_2="CU, GS25"
                discount_2="10%"
                service_3="KTX / SRT / 고속버스 등"
                discount_3="5%"
                service_4="토익시험, 교보문교"
                discount_4="최대 2천원"
              />
            </NaraCard>
          </ContentsWrapper>
          <ContentsWrapper>
            <FundPage />
          </ContentsWrapper>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default IndexPage;
