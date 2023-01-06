import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;

  grid-template-areas: 
  "header"
  "content";
`;

export const Form = styled.form`
  max-width: 1130px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;

  .Input_top {
    display: flex;
    gap: 40px;  
  }

  .Tags {
    width: 100%;

    > span {
      display: block;
      font-size: 20px;
      font-weight: 400;

      color: ${({ theme }) => theme.COLORS.GRAY_200};

      margin-bottom: 24px;
    }

    .Moviesection {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;

      width: 100%;

      padding: 16px;
      border-radius: 8px;

      background-color: ${({ theme }) => theme.COLORS.BLACK};
    }
  }
  
  .button-line {
      display: flex;
      gap: 20px;
    }
`;