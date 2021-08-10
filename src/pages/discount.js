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
import SEO from "@components/seo";

const DiscountPage = () => {
  return (
    <Layout>
      <SEO
        title="군복무 가이드 | 혜택정보"
        desc="군인들에게 제공되는 각종 혜택, 할인입니다."
        defer={false}
      />
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
