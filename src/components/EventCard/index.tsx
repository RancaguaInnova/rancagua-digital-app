import { List, Avatar } from "antd"
import { FC } from "react"
import { Event } from "../../interfaces/event"
import styled from "styled-components"
import { ArrowRightOutlined } from "@ant-design/icons"
import moment from "moment"
interface EventCardrops {
  event: Event
}
interface DescriptionProps {
  evento: Event
}
const { Item } = List
const ItemStyled = styled(Item)`
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.15);
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;

  margin-top: 10px;
  margin-bottom: 10px;

  padding: 10px;

  backdrop-filter: blur(5px);
`
const SpanStyled = styled.span`
  color: #86ac35;
`
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
