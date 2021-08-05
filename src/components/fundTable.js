import React from "react";
import styled from "styled-components";

const Container = styled.section`
  margin-top: 32px;
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
          <tr>
            <td>광주은행</td>
            <td>4.00</td>
            <td>4.50</td>
            <td>5.20</td>
            <td>홈페이지</td>
          </tr>
          <tr>
            <td>NH농협은행</td>
            <td>3.00</td>
            <td>4.00</td>
            <td>5.00</td>
            <td>홈페이지</td>
          </tr>
          <tr>
            <td>신한은행</td>
            <td>4.00</td>
            <td>4.50</td>
            <td>5.00</td>
            <td>홈페이지</td>
          </tr>
          <tr>
            <td>우리은행</td>
            <td>3.50</td>
            <td>4.00</td>
            <td>5.00</td>
            <td>홈페이지</td>
          </tr>
          <tr>
            <td>하나은행</td>
            <td>3.50</td>
            <td>4.00</td>
            <td>5.00</td>
            <td>홈페이지</td>
          </tr>
          <tr>
            <td>IBK기업은행</td>
            <td>4.00</td>
            <td>4.50</td>
            <td>5.00</td>
            <td>홈페이지</td>
          </tr>
          <tr>
            <td>KB국민은행</td>
            <td>3.50</td>
            <td>4.50</td>
            <td>5.00</td>
            <td>홈페이지</td>
          </tr>
          <tr>
            <td>DGB대구은행</td>
            <td>4.00</td>
            <td>4.50</td>
            <td>5.00</td>
            <td>홈페이지</td>
          </tr>
          <tr>
            <td>제주은행</td>
            <td>4.00</td>
            <td>4.50</td>
            <td>5.00</td>
            <td>홈페이지</td>
          </tr>
          <tr>
            <td>전북은행</td>
            <td>3.60</td>
            <td>4.10</td>
            <td>5.00</td>
            <td>홈페이지</td>
          </tr>
          <tr>
            <td>우체국</td>
            <td>4.00</td>
            <td>4.50</td>
            <td>5.00</td>
            <td>홈페이지</td>
          </tr>
          <tr>
            <td>SH수협은행</td>
            <td>2.50</td>
            <td>3.50</td>
            <td>4.50</td>
            <td>홈페이지</td>
          </tr>
          <tr>
            <td>BNK부산은행</td>
            <td>3.50</td>
            <td>4.00</td>
            <td>4.50</td>
            <td>홈페이지</td>
          </tr>
          <tr>
            <td>BNK경남은행</td>
            <td>3.10</td>
            <td>3.90</td>
            <td>4.50</td>
            <td>홈페이지</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default FundTable;
