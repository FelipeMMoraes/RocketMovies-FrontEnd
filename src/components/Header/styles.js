import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-around;
  padding: 0 123px;
  gap: 64px;
  align-items: center;

  > a, h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  >div {
    display: flex;
    flex-direction: column;

    margin-right: 10px;

    font-size: 14px;
    text-align: right;

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    
    span {
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }
`;