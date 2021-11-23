import { FC } from 'react'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import _get from 'lodash/get'
import { AuthCredentials } from 'core/types/auth'
import { login } from 'providers/redux/actions/auth'

import { PersonalInfoForm } from 'components/Forms/PersonalInfoForm'

import { Container, LoginFormContainer, LogoutContainer, Title } from './styles'

export const PersonalInfoBox: FC = () => {
  const dispatch = useDispatch()
  const { error, loading, session } = useSelector((state: any) => state.auth)
  const profile = _get(session, 'profile', {})
  const emails = _get(session, 'emails', [])
  profile.emails = emails
  console.log('profile', profile)

  const onSubmit = (data: AuthCredentials) => {
    dispatch(login(data))
  }

  const onChangeIdentification = (identification: string) => {
    console.log('on change rut', identification)
  }
  return (
    <Container>
      <>
        <PersonalInfoForm
          onSubmit={onSubmit}
          onChangeIdentification={onChangeIdentification}
          profile={profile}
        />
      </>
    </Container>
  )
}
