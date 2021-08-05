import React from "react";
import Layout from "../layout/layout";
import Container from "../styles/Container";
import ContentsWrapper from "../styles/contentsWrapper";
import Wrapper from "../styles/wrapper";

const DiscountPage = () => {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <ContentsWrapper>
            <h2>통신비 할인</h2>
          </ContentsWrapper>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default DiscountPage;
