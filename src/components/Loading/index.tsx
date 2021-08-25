import { FC } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { Container } from './styles'
export const Loading: FC = () => {
  return (
    <Container>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
    </Container>
  )
}
