import { FC } from 'react'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AuthCredentials } from 'core/types/auth'
import { login } from 'providers/redux/actions/auth'

import { PersonalInfoForm } from 'components/Forms/PersonalInfoForm'

import { Container, LoginFormContainer, LogoutContainer, Title } from './styles'

export const PersonalInfoBox: FC = () => {
  const dispatch = useDispatch()
  const { error, loading, session } = useSelector((state: any) => state.auth)

  const onSubmit = (data: AuthCredentials) => {
    dispatch(login(data))
  }

  return (
    <Container>
      AQUI EL REGISTRO DE USUARIO
      {/* WITHOUT SESSION */}
      {/* {!session &&
        <LoginFormContainer>
          <Title>Iniciar Session</Title>
          <LoginForm onSubmit={onSubmit} loading={loading} error={error} />
        </LoginFormContainer>}
      {session &&
        <LogoutContainer>
          <Title> Hola NOMBRE </Title>
          <Button>CERRAR SESION</Button>
        </LogoutContainer>}{' '}
      */}
    </Container>
  )
}
