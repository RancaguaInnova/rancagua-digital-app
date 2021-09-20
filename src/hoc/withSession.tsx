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

export const withSession = (WrappedComponent: any) => {
  const Component = (props: any) => {
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
      <>
        <WrappedComponent
          {...props}
          session={null}
          setSession={(session: any) => {
            // here set session
          }}
          removeSession={(session: any) => {
            // here remove session
          }}
          getProfile={() => {
            // here get session profile
          }}
        />
      </>
    )
  }

  return Component
}
