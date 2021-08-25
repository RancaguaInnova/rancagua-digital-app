import { FC } from 'react'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AuthCredentials } from 'providers/types/auth'
import { login } from 'providers/actions/auth'

import { LoginForm } from 'components/LoginForm'

import { Container, LoginFormContainer, LogoutContainer, Title } from './styles'

export const LoginBox: FC = () => {
  const dispatch = useDispatch()
  const { error, loading, session } = useSelector((state: any) => state.auth)
  console.log('error', error)
  console.log('loading', loading)
  console.log('session', session)
  // auth logic
  const onSubmit = (data: AuthCredentials) => {
    console.log('data', data)
    dispatch(login(data))
  }
  // auth error logic

  return (
    <Container>
      {!session &&
        <LoginFormContainer>
          <Title>Iniciar Session</Title>
          <LoginForm onSubmit={onSubmit} />
        </LoginFormContainer>}
      {session &&
        <LogoutContainer>
          <Title> Hola NOMBRE </Title>
          <Button>CERRAR SESION</Button>
        </LogoutContainer>}
    </Container>
  )
}
