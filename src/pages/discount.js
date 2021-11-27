import React from "react";
import styled from "styled-components";
import { Container, ContentsWrapper, Wrapper } from "@styles/styles";

import Layout from "@layout/layout";

import SmCardList from "../components/common/card/smCardList";
import { PlayList } from "../constants/playList";
import { CultureList } from "../constants/cultureList";
import { ComList } from "../constants/comList";
import { RestaurantsList } from "../constants/restaurantsList";

import SEO from "@components/seo";

import TabIndicator from "@components/common/TabIndicator/tabIndicator";

import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo";

const GET_BENEFIT = gql`
  {
    benefits {
      id
      name
      category
      description
      location
      address
      summary
      thumbnail
      mainBenefit
      benefits
      conditions
      othersOpts
      dtlImgs
      dtlLink
      contactNb
      period
    }
  }
`;

const Title = styled.div`
  background-color: var(--card-color);

  & h1 {
    font-size: 26px;
    padding-top: 64px;
    margin-bottom: 20px;
    margin-left: var(--side-padding);
  }
`;

const DiscountPage = (props) => {
  const { loading, error, data } = useQuery(GET_BENEFIT);
  return (
    <ApolloProvider client={client}>
      <Layout path={props.uri}>
        <SEO
          title="군복무 가이드 | 혜택정보"
          desc="군인들에게 제공되는 각종 혜택, 할인입니다."
          defer={false}
        />
        <Container>
          <Title>
            <h1>혜택</h1>
          </Title>
          <TabIndicator />
          <Wrapper>
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
    </ApolloProvider>
  );
};

export default DiscountPage;
