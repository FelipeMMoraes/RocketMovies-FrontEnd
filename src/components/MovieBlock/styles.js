import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-bottom: 24px;
  padding: 32px;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

  > h2 {
    margin-bottom: 8px;
  }

  > span {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const Tagline = styled.div``;
