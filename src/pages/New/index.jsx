import { FiArrowLeft } from 'react-icons/fi'

import { Container, Form } from "./styles";

import { ButtonText } from '../../components/ButtonText'
import { TextArea } from '../../components/TextArea'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Title } from '../../components/Title'

export function New(){
  return(
    <Container>
      <Header />

      <main>

        <Form>

          <header>
            <ButtonText href="/" title="Voltar" icon={FiArrowLeft}/>
            <Title title="Novo filme"/>
          </header>


          <div className='Input_top'>
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota (de 0 a 5)"/>
          </div>

          <TextArea placeholder="Observações"/>

          <div className="Tags">
            <span>Marcadores</span>
            <div className="Moviesection">

            </div>
          </div>

        </Form>   

      </main>
    </Container>
  )
};