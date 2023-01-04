import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container, Form, Background } from './styles'

export function SignUp(){
  return(
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input 
        placeholder="nome"
        type="text"
        icon={FiUser}/>

        <Input 
        placeholder="E-mail"
        type="text"
        icon={FiMail}/>

        <Input 
        placeholder="Senha"
        type="password"
        icon={FiLock}/>

        <Button title="Cadastrar"/>

        <ButtonText href="/" title="Voltar para o login" icon={FiArrowLeft}/>
      </Form> 

      <Background />
    </Container>
  )
}