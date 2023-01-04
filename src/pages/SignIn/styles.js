import styled from "styled-components";
import backgroundImg from '../../assets/backgroundImg.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 48px;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  > button:first-of-type {
    margin-bottom: 42px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: brightness(0.5);
`;