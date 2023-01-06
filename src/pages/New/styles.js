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
`;