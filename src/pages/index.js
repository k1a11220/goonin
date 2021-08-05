import React from "react";
import Layout from "../layout/layout";
import styled from "styled-components";
import LgCard from "../components/lgCard";

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

const NaraCard = styled.section``;

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <NaraCard>
            <h2>나라사랑카드</h2>
            <LgCard
              title="KB국민은행"
              link="https://card.kbcard.com/CXPRICAC0076.cms?mainCC=a&cooperationcode=04120"
              service_1="대중교통"
              discount_1="20%"
              service_2="스타벅스"
              discount_2="20%"
              service_3="G마켓, 옥션, GS · CJ 홈쇼핑"
              discount_3="5%"
              service_4="군마트(PX, GS25 해군마트)"
              discount_4="5 ~ 20%"
            ></LgCard>
          </NaraCard>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default IndexPage;
