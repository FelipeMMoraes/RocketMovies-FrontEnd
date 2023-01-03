import { FiPlus } from 'react-icons/fi'

import { Container, HeaderPage, Content, Movies } from './styles'
import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { Button } from '../../components/Button'
import { MovieBlock } from '../../components/MovieBlock'

export function Home() {
  return (
    <Container>
      <Header />  

        <main>
          <Content>

              <HeaderPage>
                <Title title='Meus filmes'/>
                <Button title='Adicionar filme' icon={FiPlus}/>
              </HeaderPage>

              <Movies>
                <MovieBlock title='Interestelar'/>
                <MovieBlock title='Interestelar'/>
                <MovieBlock title='Interestelar'/>
              </Movies>
          </Content>
        </main>
    </Container>
  )
}