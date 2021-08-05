import React from "react";
import Layout from "../layout/layout";
import styled from "styled-components";
import LgCard from "../components/lgCard";
import FundTable from "../components/fundTable";

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

const NaraCardWrapper = styled.section`
  margin-bottom: 64px;
`;

const NaraCard = styled.div`
  display: flex;
  margin-top: 32px;
`;

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <NaraCardWrapper>
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
          </NaraCardWrapper>
          <NaraCardWrapper>
            <h2>장병내일준비적금</h2>
            <FundTable />
          </NaraCardWrapper>
          <NaraCardWrapper>
            <h2>제주지역 항공료 지원</h2>
          </NaraCardWrapper>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default IndexPage;
