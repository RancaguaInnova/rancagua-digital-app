import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react"
import { FC } from "react"
import { Tweet } from "../../interfaces/tweet.interface"
import Linkify from "react-linkify"

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
            alt=""
          />
        )}
        {tweet.attachments?.media_keys[0]?.type === "video" && (
          <img
            className="card-img-top"
            src={tweet.attachments?.media_keys[0]?.preview_image_url || ""}
            alt=""
          />
        )}
      </IonCardHeader>

      <IonCardContent>
        <Linkify
          componentDecorator={(decoratedHref, decoratedText, key) => (
            <a target="blank" href={decoratedHref} key={key}>
              {decoratedText}
            </a>
          )}
        >
          {tweet.text}
        </Linkify>
      </IonCardContent>
    </IonCard>
  )
}
export default NewsCard
