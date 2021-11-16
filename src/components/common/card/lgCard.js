import React from "react";
import styled from "styled-components";
import More from "@src/images/more.svg";

const Link = styled.a`
  text-decoration: none;
  list-style: none;
`;

const Container = styled.div`
  width: 320px;
  height: 208px;
  background-color: var(--card-color-2);
  border: 1px solid var(--border);
  border-radius: var(--card-radius);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(208px - 24px - 24px - 8px);
  padding: 32px 24px 24px 24px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;

  & h3 {
    font-size: 18px;
    color: ${(props) => props.color};
  }
`;

const ContentsWrapper = styled.div``;
const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-weight: 500;

  &:last-of-type {
    margin-bottom: 0;
  }

  & p {
    color: var(--color-text-3);
    font-size: 14px;
  }

  & p:last-of-type {
    color: var(--color-text-2);
    font-weight: 700;
  }
`;

const LgCard = ({
  title,
  link,
  color,
  service_1,
  service_2,
  service_3,
  service_4,
  discount_1,
  discount_2,
  discount_3,
  discount_4,
}) => {
  return (
    <Container>
      <Link href={link} target="_blank" rel="noopener">
        <Wrapper>
          <Title color={color}>
            <h3>{title}</h3>
            <img src={More} alt="more" />
          </Title>
          <ContentsWrapper>
            <Contents>
              <p>{service_1}</p>
              <p>{discount_1}</p>
            </Contents>
            <Contents>
              <p>{service_2}</p>
              <p>{discount_2}</p>
            </Contents>
            <Contents>
              <p>{service_3}</p>
              <p>{discount_3}</p>
            </Contents>
            <Contents>
              <p>{service_4}</p>
              <p>{discount_4}</p>
            </Contents>
          </ContentsWrapper>
        </Wrapper>
      </Link>
    </Container>
  );
};

export default LgCard;
