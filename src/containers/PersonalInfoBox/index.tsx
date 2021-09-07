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

  const onChangeIdentification = (identification: string) => {
    console.log('on change rut', identification)
  }
  return (
    <Container>
      <>
        {/* <Title>Información personal</Title> */}
        <PersonalInfoForm
          onSubmit={onSubmit}
          onChangeIdentification={onChangeIdentification}
          profile={null}
        />
      </>
    </Container>
  )
}
