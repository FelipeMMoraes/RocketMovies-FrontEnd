import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  font-size: 16px;
  font-weight: 400;

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;
  
  svg {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  &:disabled {
    opacity: 0.5;
  }
`;