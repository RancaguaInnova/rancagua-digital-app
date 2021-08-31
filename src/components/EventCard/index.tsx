import { List, Avatar } from "antd"
import { FC } from "react"
import { Event } from "core/interfaces/event"
import { ArrowRightOutlined } from "@ant-design/icons"
import moment from "moment"
import { ItemStyled, SpanStyled } from "./styles"

interface EventCardrops {
  event: Event
}

const Description: FC<EventCardrops> = ({ event }) => {
  return (
    <>
      <SpanStyled className="dateEvent">
        {moment(event.date).format("DD-MM-YYYY HH:ss")}
      </SpanStyled>
      <br></br>
      <span> {event.description}</span>
    </>
  )
}

const EventCard: FC<EventCardrops> = ({ event }) => {
  return (
    <ItemStyled>
      <List.Item.Meta
        title={` ${event.name}`}
        description={<Description event={event}></Description>}
        avatar={<Avatar src="/assets/icon/teatro.png" />}
      ></List.Item.Meta>
      <ArrowRightOutlined />
    </ItemStyled>
  )
}
export default EventCard
