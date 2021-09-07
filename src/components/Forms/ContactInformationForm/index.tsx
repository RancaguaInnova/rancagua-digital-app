import { FC } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import {
  NumberOutlined,
  EnvironmentOutlined,
  PhoneOutlined
} from '@ant-design/icons'
import { CustomCol, Error, Subtitle } from './styles'

interface ContactInformationFormProps {
  showTitle: boolean
}

export const ContactInformationForm: FC<ContactInformationFormProps> = ({
  showTitle = false
}) => {
  return (
    <>
      {showTitle && <Subtitle>Información de Contacto</Subtitle>}
      <Form.Item
        name='street'
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su contraseña!'
          }
        ]}
      >
        <Input
          prefix={<EnvironmentOutlined />}
          type='text'
          placeholder='Nombre de calle o avenida'
          bordered={false}
        />
      </Form.Item>
      <Form.Item name='number'>
        <Input
          prefix={<NumberOutlined />}
          type='text'
          placeholder='Número'
          bordered={false}
        />
      </Form.Item>
      <Form.Item name='block'>
        <Input
          prefix={<NumberOutlined />}
          type='text'
          placeholder='Departamento'
          bordered={false}
        />
      </Form.Item>
      <Form.Item name='block'>
        <Input
          prefix={<PhoneOutlined />}
          type='text'
          placeholder='Teléfono'
          bordered={false}
        />
      </Form.Item>
    </>
  )
}
