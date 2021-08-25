import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from 'providers/actions/auth'
import { Container } from './styles'

export const LoginBox: FC = () => {
  const dispatch = useDispatch()
  const { error, loading, session } = useSelector((state: any) => state.auth)
  console.log('error', error)
  console.log('loading', loading)
  console.log('session', session)
  // auth logic
  const onSubmit = () => {
    console.log('olanda!')
    dispatch(login({ email: 'jose@smart.rancagua.cl', password: '12345678' }))
  }
  // auth error logic

  return (
    <Container>
      aqui el login box
      <button type="button" onClick={onSubmit}>
        hola
      </button>
    </Container>
  )
}
