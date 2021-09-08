import { List, Avatar } from "antd"
import { FC } from "react"
import { Event } from "core/interfaces/event"
import { ArrowRightOutlined } from "@ant-design/icons"
import moment from "moment"
import { ItemStyled, SpanStyled } from "./styles"
import { useHistory } from "react-router"

interface EventCardProps {
  event: Event
}

const goEvent=(id:string, history:any)=>{
  history.push({
    pathname: `/tabs/eventDetail`,
    id: id,
  });
}

const Description: FC<EventCardProps> = ({ event }) => {
  return (
    <>
      <SpanStyled className="dateEvent">
        {moment(event.date).format("DD-MM-YYYY")} {event.time? event.time:''}
      </SpanStyled>
      <br></br>
      <span> {event.description}</span>
    </>
  )
}

const EventCard: FC<EventCardProps> = ({ event }) => {
  const history =useHistory();
  
  return (
    <ItemStyled>
      <List.Item.Meta
        title={` ${event.name}`}
        description={<Description event={event}></Description>}
        avatar={<Avatar src="/assets/icon/teatro.png" />}
      ></List.Item.Meta>
      <ArrowRightOutlined onClick={()=>goEvent(event._id,history)} />
    </ItemStyled>
  )
}
export default EventCard
