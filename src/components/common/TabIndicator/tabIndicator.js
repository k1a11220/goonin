import React from "react";
import styled from "styled-components";
import { useTabs, TabPanel } from "react-headless-tabs";
import { TabSelector } from "./tabSelector";
import { ContentsWrapper, Wrapper } from "../../../styles/styles";
import SmCardList from "../card/smCardList";
import { ComList } from "../../../constants/comList";

const Container = styled.nav`
  width: 100%;
  height: 60px;
  background-color: var(--card-color);
  border-bottom: 1px solid var(--border);
  margin: 0 auto;
  position: sticky;
  top: 0;
  display: flex;
  z-index: 1;
`;

const ListContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-top: 24px;
  /* padding-left: 20px; */

  & div {
    cursor: pointer;
    border: none;
    background-color: var(--white);
    color: #cccfd4;
    font-weight: 600;
    font-size: 18px;
    margin-left: var(--side-padding);
  }

  & .Active {
    color: #2a364e;
    border-bottom: 2px solid #2a364e;
  }
`;

const TabIndicator = () => {
  const [selectedTab, setSelectedTab] = useTabs([
    "문화",
    "식당",
    "여행&액티비티",
    "교육",
  ]);

  return (
    <>
      <Container>
        <ListContainer>
          <TabSelector
            isActive={selectedTab === "문화"}
            onClick={() => setSelectedTab("문화")}
          >
            문화
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "식당"}
            onClick={() => setSelectedTab("식당")}
          >
            식당
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "여행&액티비티"}
            onClick={() => setSelectedTab("여행&액티비티")}
          >
            여행&액티비티
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "교육"}
            onClick={() => setSelectedTab("교육")}
          >
            교육
          </TabSelector>
        </ListContainer>
      </Container>
      <Wrapper>
        <TabPanel hidden={selectedTab !== "문화"}>
          <ContentsWrapper>
            <SmCardList CardList={ComList} />
          </ContentsWrapper>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "식당"}>My 식당</TabPanel>
        <TabPanel hidden={selectedTab !== "여행&액티비티"}>
          My 여행&액티비티
        </TabPanel>
        <TabPanel hidden={selectedTab !== "교육"}>My 교육</TabPanel>
      </Wrapper>
    </>
  );
};

export default TabIndicator;
