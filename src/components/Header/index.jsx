import { Container, Profile } from "./styles";
import { Input } from '../../components/Input'

export function Header() {
  return (
    <Container>
      <a href="/"><h1>RocketMovies</h1></a>

      <Input 
      placeholder='Pesquisar pelo título'/>

      <Profile>
        <div>
          <strong>Felipe Moraes</strong>
          <a href="/"><span>sair</span></a>
        </div>

        <img src="https://github.com/FelipeMMoraes.png" alt="Foto do Usuário" />
      </Profile>

    </Container>
  );
}