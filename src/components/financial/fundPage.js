import React, { useState } from "react";
import styled from "styled-components";
import { FundList } from "@src/constants/fundList";
import FundTable from "./fundTable";
import SmCardList from "../common/card/smCardList";

const FundTitle = styled.div`
  display: flex;
  justify-content: space-between;

  & button {
    position: relative;
    top: -4px;
    cursor: pointer;
    width: 90px;
    height: 40px;
    border: none;
    border-radius: 8px;
    background-color: var(--highlight-color);
    color: var(--color-text-1);
    font-size: 14px;
  }
`;

const FundPage = () => {
  const [table, setTable] = useState(false);
  return (
    <>
      <FundTitle>
        <h2>🏦 장병내일준비적금</h2>
        <button
          onClick={(e) => setTable(!table)}
          bgcolor={table === true ? "#0a0a0a" : "#326BBF"}
        >
          {table === true ? "카드 보기" : "표 보기"}
        </button>
      </FundTitle>
      {table === true ? <FundTable /> : <SmCardList CardList={FundList} />}
    </>
  );
};

export default FundPage;
