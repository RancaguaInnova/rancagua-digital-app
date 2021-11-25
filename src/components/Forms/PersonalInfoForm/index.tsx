import { FC } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'

import { IdentificationForm } from 'components/Forms/IdentificationForm'
import {
  MailOutlined,
  IdcardOutlined,
  UserOutlined,
  CalendarOutlined
} from '@ant-design/icons'
import { Subtitle } from './styles'

interface PersonalInfoFormProps {
  onChangeIdentification?: any
  loading?: boolean
  onChange: any
  error?: string
  profile: any
}

export const PersonalInfoForm: FC<PersonalInfoFormProps> = ({
  loading = false,
  error = '',
  profile = null,
  onChange,
  onChangeIdentification = () => {}
}) => {
  return (
    <>
      <Subtitle>Información Personal</Subtitle>
      <Form.Item
        name='name'
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su Nombre'
          }
        ]}
      >
        <Input
          prefix={<IdcardOutlined />}
          placeholder='Ingrese su Nombre'
          bordered={false}
        />
      </Form.Item>
      <Form.Item
        name='lastName'
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su Apellido'
          }
        ]}
      >
        <Input
          prefix={<IdcardOutlined />}
          placeholder='Ingrese su Apellido'
          bordered={false}
        />
      </Form.Item>
      <IdentificationForm onChange={onChangeIdentification} />

      <Form.Item
        name='email'
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su email'
          }
        ]}
      >
        <Input
          prefix={<MailOutlined />}
          placeholder='Ingrese su email'
          bordered={false}
        />
      </Form.Item>

      <Form.Item name='birthDate'>
        <Input
          prefix={<CalendarOutlined />}
          placeholder='Ingrese su Fecha de Nacimiento'
          bordered={false}
        />
      </Form.Item>
      <Form.Item name='gender'>
        <Input
          prefix={<UserOutlined />}
          placeholder='Género'
          bordered={false}
        />
      </Form.Item>
    </>
  )
}
