import { FiArrowLeft, FiClock, FiStar } from 'react-icons/fi'

import { Container, Tagline, HeaderMovie, Content } from "./styles"

import { ButtonText } from '../../components/ButtonText'
import { Paragraph } from '../../components/Paragraph'
import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { Tag } from '../../components/Tag'


export function Details() {
  return(
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title='Voltar' icon={FiArrowLeft} />

          <HeaderMovie>
            
            <div className='HMUp'>
              <Title title='Interestellar'/>
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
            </div>

            <div className='HMDown'>
              <img src="http://github.com/felipeMMoraes.png" alt="Foto do Usuário da nota" />
              <span>Por Felipe Moraes</span>
              <FiClock />
              <span>27/12/22 às 18:00</span>
            </div>

          </HeaderMovie>

          <Title title='Interestellar'/>

          <Tagline>
            <Tag title="Ficção Cientifica"/>
            <Tag title="Drama"/>
            <Tag title="Familia"/>
          </Tagline>

          <Paragraph>
          Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann - nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.
          </Paragraph>

          <Paragraph>
          Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
          </Paragraph>
        </Content>
      </main>
    </Container>
  )
};