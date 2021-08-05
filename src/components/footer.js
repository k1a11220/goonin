import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  width: var(--width);
  height: 200px;
  border-radius: 25px;
  background-color: var(--white);
  margin: 0 auto;
  margin-top: 32px;
`;

const Footer = () => {
  return (
    <Container>
      <div>
        <h2>군입대 가이드</h2>
      </div>
    </Container>
  );
};

export default Footer;
