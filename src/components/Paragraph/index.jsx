import { Container } from "./styles";

export function Paragraph({children, className}){
  return(
    <Container className={className}>
      {children}
    </Container>
  )
}