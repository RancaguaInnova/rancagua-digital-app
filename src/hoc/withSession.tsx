import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSessionData, logout } from 'providers/redux/actions/auth'
import { Session } from 'core/types/session'

export const withSession = (WrappedComponent: any) => {
  const Component = (props: any) => {
    const dispatch = useDispatch()
    const { error, loading, session } = useSelector((state: any) => state.auth)

    const onLogout = () => {
      dispatch(logout())
    }

    const setSession = (data: Session) => {
      dispatch(setSessionData(data))
    }

    return (
      <>
        <WrappedComponent
          {...props}
          session={session}
          sessionLoading={loading}
          sessionError={error}
          setSession={setSession}
          logout={onLogout}
        />
      </>
    )
  }

  return Component
}
