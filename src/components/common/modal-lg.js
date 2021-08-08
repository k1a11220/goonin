import React, { useState } from "react";
import styled from "styled-components";
import Close from "@src/images/Close.svg";

const Container = styled.section`
  display: ${(props) => props.display};
`;

const Background = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  overflow-y: auto;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--modal-width);
  background-color: var(--card-color);
  margin: 0 auto;
  border-radius: 16px;
  justify-content: space-between;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 260px;
  border-radius: 16px 16px 0 0;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    height: 220px;
  }
`;

const CloseBtn = styled.img`
  position: absolute;
  margin-top: 24px;
  float: right;
  width: 18px;
  margin-left: calc(var(--modal-width) - 18px - 24px);
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    margin-left: calc(var(--modal-width) - 18px - 24px);
  }
`;

const TextArea = styled.div`
  padding: 40px 32px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  align-items: center;
  padding-bottom: 16px;

  & h3 {
    font-size: 24px;
  }

  & h4 {
    font-size: 18px;
    color: var(--highlight-color);
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    flex-direction: column;
    align-items: flex-start;
    & h3 {
      margin-bottom: 8px;
    }
  }
`;

const Contents = styled.div`
  margin-top: 32px;

  & p {
    font-weight: 500;
    color: var(--color-text-4);
    margin-bottom: 8px;
  }

  & p:last-of-type {
    margin-bottom: 0;
  }
`;

const CTA = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  font-size: 16px;
  border: none;
  border-radius: 0 0 16px 16px;
  background-color: var(--highlight-color);
  cursor: pointer;

  p {
    color: var(--color-text-1);
    font-weight: 500;
  }
`;

const ModalLg = ({ thumbnail, price, contents, link }) => {
  const [display, setDisplay] = useState("block");
  const CloseModal = () => {
    setDisplay("none");
  };
  console.log(display);
  return (
    <Container display={display}>
      <Background>
        <Wrapper>
          <Thumbnail src={thumbnail} />
          <CloseBtn onClick={CloseModal} src={Close} alt="closeBtn" />
          <TextArea>
            <Title>
              <h3>0플랜 슈퍼히어로</h3>
              <h4>월 55,000원</h4>
            </Title>
            <Contents>
              <p>데이터 100GB, 영상 · 부가통화 300분 제공</p>
              <p>T가족모아 데이터 이용 혜택 (단, 받기만 가능)</p>
              <p>
                'T멤버십 VIP' 또는 'FLO 앤 데이터와 wavve 앤 데이터 모두 70%
                할인 (wavve 앤 데이터 플러스 가능)' 중 선택
              </p>
            </Contents>
          </TextArea>
          <CTA target="_blank" rel="noopener" href={link}>
            <p>확인하기</p>
          </CTA>
        </Wrapper>
      </Background>
    </Container>
  );
};

export default ModalLg;
