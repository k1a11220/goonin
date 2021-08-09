import React from "react";
import styled from "styled-components";
import { FundList } from "@src/constants/fundList";

const Container = styled.section`
  overflow-x: scroll;

  & table {
    min-width: 1010px;
  }
`;

const FundTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>은행</th>
            <th>6개월 이상 ~ 1년 미만</th>
            <th>1년 이상 ~1년 3개월 미만</th>
            <th>1년 3개월 이상 ~ 만기</th>
            <th>홈페이지</th>
          </tr>
        </thead>
        <tbody>
          {FundList.map((data) => {
            return (
              <tr>
                <td>{data.title}</td>
                <td>{data.month_1}</td>
                <td>{data.month_2}</td>
                <td>{data.month_3}</td>
                <td>
                  <a href={data.link}>홈페이지</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default FundTable;
