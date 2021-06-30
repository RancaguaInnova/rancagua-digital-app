import { useEffect } from "react"
import { IonContent, IonPage } from "@ionic/react"
import { Col, Row } from "antd"
import { useDispatch, useSelector } from "react-redux"
import "./styles.scss"
import Header from "../../components/Header"
import { Tweet } from "../../interfaces/tweet"
import NewsCard from "../../components/NewsCard"
import { GetListTweets } from "../../providers/actions/tweet"

const HomePage: React.FC = () => {
  const dispatch = useDispatch()
  const { tweets } = useSelector((state: any) => state.tweet)
  const listado: Tweet[] = tweets || []
  useEffect(() => {
    dispatch(GetListTweets())
    return () => {}
  }, [dispatch])
  return (
    <IonPage>
      <Header title="Noticias"></Header>
      <IonContent fullscreen>
        <Row gutter={8}>
          {listado.map((tweet: any, index: number) => (
            <Col xs={24} sm={24} md={12} lg={8} span={8} key={index}>
              <NewsCard data-aos="fade-up" tweet={tweet}></NewsCard>
            </Col>
          ))}
        </Row>
      </IonContent>
    </IonPage>
  )
}

export default HomePage
