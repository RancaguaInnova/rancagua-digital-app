import { FC } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import { GenderInput } from 'components/Inputs/GenderInput'
import { BirthDateInput } from 'components/Inputs/BirthDateInput'
import { EmailInput } from 'components/Inputs/EmailInput'
import { IdentificationInput } from 'components/Inputs/IdentificationInput'
import { NameInput } from 'components/Inputs/NameInput'
import { LastNameInput } from 'components/Inputs/LastNameInput'
import { IdcardOutlined } from '@ant-design/icons'
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

      <NameInput placeholder='Ingrese su Nombre' bordered={false} />
      <LastNameInput placeholder='Ingrese su Apellido' bordered={false} />
      <IdentificationInput placeholder='Ingrese su RUT' bordered={false} />
      <EmailInput placeholder='Ingrese su email' bordered={false} />
      <BirthDateInput
        placeholder='Ingrese su Fecha de Nacimiento'
        bordered={false}
      />
      <GenderInput placeholder='Género' bordered={false} />
    </>
  )
}
