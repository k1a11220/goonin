import React from "react";
import Layout from "@layout/layout";
import Container from "@styles/container";
import ContentsWrapper from "@styles/contentsWrapper";
import Wrapper from "@styles/wrapper";

import SmCardList from "../components/common/card/smCardList";

import { PlayList } from "../constants/playList";
import { CultureList } from "../constants/cultureList";
import { ComList } from "../constants/comList";
import { RestaurantsList } from "../constants/restaurantsList";

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
            <h2>🎬 문화</h2>
            <SmCardList CardList={CultureList} />
          </ContentsWrapper>
          <ContentsWrapper>
            <h2>🎡 여행 & 액티비티</h2>
            <SmCardList CardList={PlayList} />
          </ContentsWrapper>
          <ContentsWrapper>
            <h2>🍽 식당</h2>
            <SmCardList CardList={RestaurantsList} />
          </ContentsWrapper>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default DiscountPage;
