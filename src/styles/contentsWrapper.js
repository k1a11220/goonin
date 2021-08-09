import styled from "styled-components";

const ContentsWrapper = styled.section`
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

export default ContentsWrapper;
