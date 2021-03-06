import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  width: var(--width);
  border-radius: var(--main-radius);
  background-color: var(--card-color);
  margin: 0 auto;
  margin-top: var(--page-padding);
  margin-bottom: var(--page-margin);
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: var(--top-padding) 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.device.md}) {
    grid-template-columns: 1fr;
    padding-bottom: var(--top-padding);
  }

  & div {
    padding: 0 var(--side-padding);
  }

  & div:first-of-type {
    border-right: 1px solid var(--border);

    @media (max-width: ${({ theme }) => theme.device.md}) {
      border-right: none;
      border-bottom: 1px solid var(--border);
      padding-bottom: var(--top-padding);
    }
  }

  & div:last-of-type {
    @media (max-width: ${({ theme }) => theme.device.md}) {
      padding-top: var(--top-padding);
    }
  }

  & h3 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  & h4 {
    font-size: 14px;
    margin-top: 32px;
    font-weight: 500;
    color: var(--color-text-3);

    & strong {
      color: var(--color-text-4);
    }
  }

  & p {
    font-size: 14px;
  }

  & a {
    color: var(--color-text-4);
    text-decoration: none;
  }
`;

const ReportBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 94px;
  height: 30px;
  border: none;
  border-radius: 8px;
  background-color: var(--highlight-color);
  margin-top: 16px;
  text-decoration: none;

  & p {
    font-size: 12px;
    color: var(--color-text-1);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <ContentWrapper>
          <h3>신성한 병역의 의무를 수행하는 모든 청춘을 응원합니다.</h3>
          <p>
            본 사이트에서 제공하는 정보는 민간이 제작한 자료이므로 공식 자료로
            사용될 수 없습니다. 또한 제공하는 정보의 사용/공유로 인해 발생된
            문제의 책임은 사용자에게 있습니다.
          </p>
          <h4>
            개발자 <strong>손범수 I </strong>
            <strong>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:beskar.son@gmail.com"
              >
                beskar.son@gmail.com
              </a>
            </strong>
          </h4>
        </ContentWrapper>
        <ContentWrapper>
          <p>
            정보 오류 혹은 군인들에게 제공되는 기타 혜택, 정보 등이 있으면 제보
            부탁드립니다.
          </p>
          <ReportBtn
            target="_blank"
            rel="noopener"
            href="mailto:beskar.son@gmail.com"
          >
            <p>제보하기</p>
          </ReportBtn>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default Footer;
