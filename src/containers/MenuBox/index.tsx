import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from 'providers/redux/actions/auth'

import { Menu } from 'components/Menu'

export const MenuBox = () => {
  const { session } = useSelector((state: any) => state.auth)
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <Menu session={session} onLogout={onLogout} />
    </>
  )
}
