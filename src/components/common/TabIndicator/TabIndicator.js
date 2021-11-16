import React from "react";
import styled from "styled-components";

const Container = styled.div`
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

const ListContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-top: 24px;
  /* padding-left: 20px; */

  & div {
    color: #cccfd4;
    font-weight: 600;
    font-size: 18px;
    margin-left: var(--side-padding);
  }

  & div:first-of-type {
    color: #2a364e;
    border-bottom: 2px solid #2a364e;
  }
`;

const TabIndicator = () => {
  return (
    <Container>
      <ListContainer>
        <div>문화</div>
        <div>식당</div>
        <div>여행&액티비티</div>
        <div>교육</div>
        <div>통신</div>
      </ListContainer>
    </Container>
  );
};

export default TabIndicator;
