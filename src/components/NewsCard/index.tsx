import { FC } from "react"
import { Tweet } from "../../interfaces/tweet"
import Linkify from "react-linkify"
import { Card } from "antd"
import styled from "styled-components"
import moment from "moment"
import "./styles.scss"

const idLocale = require("moment/locale/es")
moment.updateLocale("es", idLocale)
export const CardStyled = styled(Card)`
  background: #fff;
  color: #222;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 10px 5px 5px #ddd;
`

interface NewsCardProps {
  tweet: Tweet
}
const NewsCard: FC<NewsCardProps> = ({ tweet }) => {
  const { Meta } = Card
  return (
    <>
      <CardStyled
        hoverable
        style={{ width: "90%)", margin: "5%" }}
        cover={
          tweet.attachments?.media_keys[0]?.url ? (
            <img
              className="card-img-top"
              src={tweet.attachments?.media_keys[0]?.url || ""}
              alt=""
            />
          ) : (
            tweet.attachments?.media_keys[0]?.type === "video" && (
              <img
                className="card-img-top"
                src={tweet.attachments?.media_keys[0]?.preview_image_url || ""}
                alt=""
              />
            )
          )
        }
      >
        <Linkify
          componentDecorator={(decoratedHref, decoratedText, key) => (
            <a target="blank" href={decoratedHref} key={key}>
              {decoratedText}
            </a>
          )}
        >
          {tweet.text}
        </Linkify>
        <p></p>
        <Meta title="" description={moment(tweet.created_at).fromNow()} />
      </CardStyled>
    </>
  )
}
export default NewsCard
