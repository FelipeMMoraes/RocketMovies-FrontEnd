import { FiPlus } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Container, HeaderPage, Content, Movies } from './styles';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import { MovieBlock } from '../../components/MovieBlock'

export function Home() {
  return (
    <Container>
      <Header />  

        <main>
          <Content>

              <HeaderPage>
                <Title title='Meus filmes'/>
                <Link to="/new">
                  <Button title='Adicionar filme' icon={FiPlus}/>
                </Link>
              </HeaderPage>

              <Movies>
                <MovieBlock data={{
                    title: 'Interestellar',
                    tags: [
                      {id: '1', name: 'Ficção Científica'},
                      {id: '3', name: 'Drama'},
                      {id: '2', name: 'Familia'}
                    ]
                }}/>
                <MovieBlock data={{
                    title: 'Interestellar',
                    tags: [
                      {id: '1', name: 'Ficção Científica'},
                      {id: '3', name: 'Drama'},
                      {id: '2', name: 'Familia'}
                    ]
                }}/>
                <MovieBlock data={{
                    title: 'Interestellar',
                    tags: [
                      {id: '1', name: 'Ficção Científica'},
                      {id: '3', name: 'Drama'},
                      {id: '2', name: 'Familia'}
                    ]
                }}/>
              </Movies>
          </Content>
        </main>
    </Container>
  )
}