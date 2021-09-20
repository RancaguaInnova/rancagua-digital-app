import React, { useContext, useState, useEffect } from 'react'
/* import _get from 'lodash/get'
import Pro from 'core/providers/Pro'
import User from 'core/providers/User'
import { AuthContext } from 'context/Auth'

const PROFILE_PROVIDER = {
  pro: Pro,
  user: User,
  visit: {
    get: () => {
      return null
    }
  }
} */

//const getRole = (session) => _get(session, 'user.role', 'visit')

export const withSession = (WrappedComponent) => {
  const Component = (props) => {
    /*  const { session, setSession, removeSession } = useContext(AuthContext)
    const [provider, setProvider] = useState(PROFILE_PROVIDER[getRole(session)])

    useEffect(() => {
      const prov = PROFILE_PROVIDER[getRole(session)]
      setProvider(prov)
    }, [session])

    const getProfile = async () => {
      return await provider.get()
    } */

    return (
      <div>
        hola
        {/* <WrappedComponent
        {...props}
        session={session}
        setSession={setSession}
        removeSession={removeSession}
        getProfile={getProfile}
      /> */}
      </div>
    )
  }

  return Component
}
