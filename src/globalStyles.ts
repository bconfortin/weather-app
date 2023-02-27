import styled from "styled-components";

export const Container = styled.div`
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