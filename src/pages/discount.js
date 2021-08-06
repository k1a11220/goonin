import React from "react";
import Layout from "@layout/layout";
import Container from "@styles/container";
import ContentsWrapper from "@styles/contentsWrapper";
import Wrapper from "@styles/wrapper";

import SmCardList from "../components/common/smCardList";

import { PlayList } from "../constants/playList";
import { CultureList } from "../constants/cultureList";
import { ComList } from "../constants/comList";

const DiscountPage = () => {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <ContentsWrapper>
            <h2>📱 통신</h2>
            <SmCardList CardList={ComList} />
          </ContentsWrapper>
          <ContentsWrapper>
            <h2>🎬 문화생활</h2>
            <SmCardList CardList={CultureList} />
          </ContentsWrapper>
          <ContentsWrapper>
            <h2>🎡 여행 & 액티비티</h2>
            <SmCardList CardList={PlayList} />
          </ContentsWrapper>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default DiscountPage;
