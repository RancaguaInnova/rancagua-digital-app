import { FC } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AuthCredentials } from 'core/types/auth'
import { login } from 'providers/redux/actions/auth'

import { LoginForm } from 'components/Forms/LoginForm'

import { Container, LoginFormContainer, Title } from './styles'

export const LoginBox: FC = () => {
  const dispatch = useDispatch()
  const { error, loading, session } = useSelector((state: any) => state.auth)
  const refUrl = '/tabs/home'

  const onSubmit = (data: AuthCredentials) => {
    dispatch(login(data))
  }

  return (
    <Container>
      {!session && (
        <LoginFormContainer>
          <Title>Iniciar Sesión</Title>
          <LoginForm onSubmit={onSubmit} loading={loading} error={error} />
        </LoginFormContainer>
      )}
      {session && <Redirect to={refUrl} />}
    </Container>
  )
}
