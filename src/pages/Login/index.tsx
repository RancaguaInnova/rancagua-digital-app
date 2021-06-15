import React, { useEffect, useState } from "react"
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  useIonRouter,
} from "@ionic/react"
import Header from "../../components/Header"

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState(false)

  const router = useIonRouter()
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/tabs/tab1", "none", "replace")
    }
  }, [isAuthenticated, router])

  const handleLogin = () => {
    // login()
  }

  return (
    <IonPage>
      <Header title="Iniciar Session"></Header>
      <IonContent>
        <IonButton expand="block" onClick={handleLogin}>
          Login
        </IonButton>
        {error && (
          <>
            <div>error</div>
            <div>{JSON.stringify(error)}</div>
          </>
        )}
      </IonContent>
    </IonPage>
  )
}

export default Login
