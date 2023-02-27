import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  max-width: 80%;
  padding: 0 24px;
  margin: auto;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  grid-gap: 60px;

  @media (max-width: 1024px) {
    max-width: 90%;
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const FlexContainer = styled.div<{ column?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: ${({column}) => column ? "column" : "row"};
`;