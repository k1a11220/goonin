import styled from "styled-components";

export const ContentsWrapper = styled.section`
  padding-bottom: 64px;

  & h2 {
    font-size: 24px;
    margin-bottom: 32px;
  }

  @media (max-width: ${({ theme }) => theme.device.md}) {
    & h2 {
      margin-bottom: 24px;
    }
  }
`;

export const Container = styled.main`
  width: var(--width);
  background-color: var(--card-color);
  margin: 0 auto;
  /* border-radius: var(--main-radius); */
  /* margin-top: var(--page-padding); */
`;

export const Wrapper = styled.div`
  padding: var(--top-padding) var(--side-padding) 0 var(--side-padding);
`;
