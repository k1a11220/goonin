import React, { useState } from "react";
import Layout from "../layout/layout";
import styled from "styled-components";
import LgCard from "../components/lgCard";
import FundTable from "../components/fundTable";
import FundCard from "../components/fundCard";

const Container = styled.main`
  width: var(--width);
  background-color: var(--white);
  border-radius: 25px;
  margin: 0 auto;
  margin-top: 32px;
`;

const Wrapper = styled.div`
  padding: 64px 40px;
`;

const ContentsWrapper = styled.section`
  margin-bottom: 64px;

  & h2 {
    margin-bottom: 32px;
  }
`;

const NaraCard = styled.div`
  display: flex;
`;

const FundTitle = styled.div`
  display: flex;
  justify-content: space-between;

  & button {
    position: relative;
    top: -4px;
    cursor: pointer;
    width: 90px;
    height: 40px;
    border: none;
    border-radius: 8px;
    background-color: #ebedf2;
  }
`;

const IndexPage = () => {
  const [table, setTable] = useState(true);

  return (
    <Layout>
      <Container>
        <Wrapper>
          <ContentsWrapper>
            <h2>나라사랑카드</h2>
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
            <FundTitle>
              <h2>장병내일준비적금</h2>
              <button
                onClick={(e) => setTable(!table)}
                bgcolor={table === true ? "#0a0a0a" : "#326BBF"}
              >
                {table === true ? "카드 보기" : "표 보기"}
              </button>
            </FundTitle>
            {table === true ? <FundTable /> : <FundCard />}
          </ContentsWrapper>
          <ContentsWrapper>
            <h2>제주지역 항공료 지원</h2>
          </ContentsWrapper>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default IndexPage;
