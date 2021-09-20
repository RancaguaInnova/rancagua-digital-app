import { FC } from 'react'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AuthCredentials } from 'core/types/auth'
import { login, logout } from 'providers/redux/actions/auth'

import { LoginForm } from 'components/Forms/LoginForm'

import { Container, LoginFormContainer, LogoutContainer, Title } from './styles'

export const LoginBox: FC = () => {
  const dispatch = useDispatch()
  const { error, loading, session } = useSelector((state: any) => state.auth)

  const onSubmit = (data: AuthCredentials) => {
    dispatch(login(data))
  }

  const onLogout = () => {
    dispatch(logout())
  }

  return (
    <Container>
      {/* WITHOUT SESSION */}
      {!session &&
        <LoginFormContainer>
          <Title>Iniciar Session</Title>
          <LoginForm onSubmit={onSubmit} loading={loading} error={error} />
        </LoginFormContainer>}
      {/* WITH SESSION */}
      {session &&
        <LogoutContainer>
          <Title> Hola NOMBRE </Title>
          <Button onClick={onLogout}>CERRAR SESION</Button>
        </LogoutContainer>}
    </Container>
  )
}