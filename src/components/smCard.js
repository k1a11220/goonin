import React from "react";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;

  &:nth-of-type(4n) {
    margin: 0;
  }
`;

const Container = styled.div`
  width: 268px;
  height: 90px;
  background-color: #ebedf2;
  border-radius: 8px;
  display: flex;
  align-items: center;

  &:nth-of-type(4n) {
    margin-right: 0;
  }
`;

const TextWrapper = styled.div`
  margin-left: 16px;

  & h4 {
    font-weight: 500;
  }

  & p {
    font-weight: 600;
    color: #326bbf;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: var(--white);
  margin-left: 20px;
`;

const SmCard = ({ title, detail, icon, link }) => {
  return (
    <Link href={link} target="_blank" rel="noopener">
      <Container>
        <Icon icon={icon} />
        <TextWrapper>
          <h4>{title}</h4>
          <p>{detail}</p>
        </TextWrapper>
      </Container>
    </Link>
  );
};

export default SmCard;
