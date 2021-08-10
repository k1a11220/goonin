import React from "react";
import styled from "styled-components";
import Close from "@src/images/close.svg";

const Container = styled.section`
  position: fixed;
  display: ${(props) => props.display};
  z-index: 99;
`;

const Background = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  /* height: 100vh; */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  overflow-y: auto;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  max-height: 95vh;
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
  object-fit: cover;
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
  overflow-y: scroll;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    padding: 32px 24px;
  }
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

  & p {
    font-weight: 600;
    font-size: 18px;
    color: var(--color-text-2);
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

  & h4 {
    font-size: 20px;
    margin-bottom: 14px;
    color: var(--color-text);
  }
`;

const CTABtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 56px;
  font-size: 16px;
  border: none;
  border-radius: 0 0 16px 16px;
  background-color: var(--highlight-color);
  cursor: pointer;
  text-decoration: none;

  p {
    color: var(--color-text-1);
    font-weight: 500;
  }
`;

const ModalLg = ({
  title,
  price,
  detail,
  thumbnail,
  link,
  display,
  closeModal,
}) => {
  const bold = ["우대금리 조건"];

  const refinedContents = detail.replace(bold, "");
  const refinedDetail = refinedContents.split("<br/>");
  const refinedTitle = detail.match(bold);

  const refinedData = [
    {
      refinedDetail: refinedDetail,
      refinedTitle: refinedTitle,
    },
  ];
  return (
    <Container display={display === true ? "block" : "none"}>
      <Background>
        <Wrapper>
          <Thumbnail src={thumbnail} />
          <CloseBtn onClick={closeModal} src={Close} alt="closeBtn" />
          <TextArea>
            <Title>
              <h3>{title}</h3>
              <p>{price}</p>
            </Title>
            <Contents>
              {refinedData.map((data) => {
                return (
                  <>
                    <h4>{data.refinedTitle}</h4>
                    {data.refinedDetail.map((data) => {
                      return <p>{data}</p>;
                    })}
                  </>
                );
              })}
            </Contents>
          </TextArea>
          <CTABtn target="_blank" rel="noopener" href={link}>
            <p>확인하기</p>
          </CTABtn>
        </Wrapper>
      </Background>
    </Container>
  );
};

export default ModalLg;
