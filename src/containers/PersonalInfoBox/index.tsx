import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _get from 'lodash/get'
import { Form, Input, Button, Row, Col } from 'antd'

import { PasswordForm } from 'components/Forms/PasswordForm'
import { ContactInformationForm } from 'components/Forms/ContactInformationForm'
import { AuthCredentials } from 'core/types/auth'
import { login } from 'providers/redux/actions/auth'

import { PersonalInfoForm } from 'components/Forms/PersonalInfoForm'

import { Container } from './styles'

export const PersonalInfoBox: FC = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const { error, loading, session } = useSelector((state: any) => state.auth)
  const profile = _get(session, 'profile', {})
  const emails = _get(session, 'emails', [])
  profile.emails = emails
  console.log('profile', profile)

  const onSubmit = (data: AuthCredentials) => {
    dispatch(login(data))
  }

  const onChangePassword = (newPassword: string) => {
    console.log('on change pass', newPassword)
  }

  const onChangeIdentification = (identification: string) => {
    console.log('on change rut', identification)
  }
  return (
    <Container>
      <Form
        form={form}
        className='login-form'
        initialValues={{ email: '', password: '' }}
        onFinish={onSubmit}
        scrollToFirstError
      >
        <PersonalInfoForm
          onChangeIdentification={onChangeIdentification}
          profile={profile}
          onChange={() => {
            console.log('on change password')
          }}
        />

        <ContactInformationForm showTitle />

        <PasswordForm
          onChange={() => {
            console.log('on change password')
          }}
          showTitle
        />
      </Form>
    </Container>
  )
}
