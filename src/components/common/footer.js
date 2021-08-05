import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  width: var(--width);
  height: 200px;
  border-radius: 25px;
  background-color: var(--white);
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 40px;

  & h2 {
    font-size: 22px;
  }

  & p {
    font-size: 12px;
    color: #c1c1c1;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <h2>군입대 가이드</h2>
        <p>
          본 사이트에서 제공하는 정보는 민간이 취합한 자료이므로 공식자료로
          사용될 수 없습니다. <br />
          또한 제공하는 정보 사용/공유로 인해 발생된 문제의 책임은 전적으로
          사용자에게 있습니다.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Footer;
