import styled from "styled-components";

export const BackgroundContainer = styled.div<{ bgImage?: string }>`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: url(${({bgImage}) => bgImage ? bgImage : ""});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContentContainer = styled.div`
  display: flex;
  max-width: 80%;
  width: 100%;
  min-height: 100%;
  padding: 0 24px;
  margin: 60px auto;
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