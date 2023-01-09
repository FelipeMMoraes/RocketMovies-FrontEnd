import { Container, Profile } from "./styles";
import { Input } from '../../components/Input'

import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <Link to="/"><h1>RocketMovies</h1></Link>

      <Input 
      placeholder='Pesquisar pelo título'/>

      <Profile>
        <div>
          <Link to="/"><strong>Felipe Moraes</strong></Link>
          <a href="/"><span>sair</span></a>
        </div>

        <img src="https://github.com/FelipeMMoraes.png" alt="Foto do Usuário" />
      </Profile>

    </Container>
  );
}