import styled from "styled-components";

export const Container = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: justify;

  &:not(:nth-last-of-type(1)){
    margin-bottom: 20px;
  }
`;