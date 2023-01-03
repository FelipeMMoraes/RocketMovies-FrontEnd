import { Container, Tagline } from "./styles";
import { Tag } from '../Tag'
import { Rating } from '../Rating'

export function MovieBlock({ title }){
  return(
    <Container>
      <h2>{title}</h2>
      <Rating></Rating>
      <span>
      Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
      </span>

      <Tagline>
        <Tag title="Ficção Cientifica"/>
        <Tag title="Drama"/>
        <Tag title="Familia"/>
      </Tagline>

    </Container>
  )
};