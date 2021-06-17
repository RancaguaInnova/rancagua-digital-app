import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react"
import { FC } from "react"
import { Tweet } from "../../interfaces/tweet.interface"
import "./styles.scss"

interface NewsCardProps {
  tweet: Tweet
}
const NewsCard: FC<NewsCardProps> = ({ tweet }) => {
  return (
    <IonCard>
      <IonCardHeader>
        {tweet.attachments?.media_keys[0]?.url && (
          <img
            className="card-img-top"
            src={tweet.attachments?.media_keys[0]?.url || ""}
            alt="Card image cap"
          />
        )}
      </IonCardHeader>

      <IonCardContent>{tweet.text}</IonCardContent>
    </IonCard>
  )
}
export default NewsCard
