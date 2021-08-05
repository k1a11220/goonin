import React from "react";
import ComCard from "@components/communication/comCard";
import CultureCard from "@components/culture/cultureCard";
import Layout from "@layout/layout";
import Container from "@styles/Container";
import ContentsWrapper from "@styles/contentsWrapper";
import Wrapper from "@styles/wrapper";

const DiscountPage = () => {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <ContentsWrapper>
            <h2>📱 통신</h2>
            <ComCard />
          </ContentsWrapper>
          <ContentsWrapper>
            <h2>🎬 문화생활</h2>
            <CultureCard />
          </ContentsWrapper>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default DiscountPage;
