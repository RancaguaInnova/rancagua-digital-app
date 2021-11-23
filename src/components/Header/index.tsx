import {
  IonButton,
  IonButtons,
  IonHeader,
  IonContent,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonBackButton
} from '@ionic/react'
import React, { FC, useEffect } from 'react'
import Title from 'components/Title'
import './styles.scss'
import { useHistory } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
interface HeaderProps {
  title?: string
  back?: boolean
}

const Header: FC<HeaderProps> = ({ title = '', back = false }) => {
  const history = useHistory()

  const [mQuery, setMQuery] = React.useState<any>({
    matches: window.innerWidth > 768 ? true : false
  })

  useEffect(() => {
    let mediaQuery = window.matchMedia('(min-width: 768px)')
    mediaQuery.addEventListener('change', (e) => {
      setMQuery(e)
    })
    return () =>
      mediaQuery.removeEventListener('change', (e) => {
        setMQuery(e)
      })
  }, [])

  return (
    <IonHeader className='header'>
      <IonToolbar className='header'>
        <IonButtons slot='start'>
          <span className='back' onClick={() => history.goBack()}>
            <IoIosArrowBack></IoIosArrowBack>
          </span>
        </IonButtons>
        <IonButtons>
          <IonTitle>
            <img src='/assets/Rancagua-Blanco.png' height='35' alt='Logo'></img>
          </IonTitle>
        </IonButtons>
        <IonButtons slot='end'>
          {mQuery && !mQuery.matches ? (
            <IonMenuButton />
          ) : (
            <>
              <IonButton routerLink={'/tabs/home'}>Inicio </IonButton>
              <IonButton routerLink={'/tabs/calendar'}>Calendario </IonButton>
              <IonButton routerLink={'/tabs/services'}>Servicios</IonButton>
              <IonButton routerLink={'/tabs/information'}>
                Informaciones
              </IonButton>
              <IonButton routerLink={'/tabs/subscription'}>
                Suscripción
              </IonButton>

              <IonButton routerLink={'/tabs/login'}>Login</IonButton>
            </>
          )}
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
