import { List, Avatar } from "antd";
import { FC } from "react";
import { Event } from "core/interfaces/event";
import { ArrowRightOutlined } from "@ant-design/icons";
import moment from "moment";
import { ItemStyled, SpanStyled } from "./styles";
import { useHistory } from "react-router";
import { setInStorage, getFromStorage } from "hooks/useStorage";

interface EventCardProps {
  event: Event;
}

const goEvent = async (event: Event, history: any) => {
  let e = await setInStorage("event", event);
  console.log("set in storage", e);
  history.push({
    pathname: `/tabs/eventDetail`,
  });
};

const Description: FC<EventCardProps> = ({ event }) => {
  return (
    <>
      <SpanStyled className="dateEvent">
        {moment(event.date).format("DD-MM-YYYY")}{" "}
        {event?.time !== "Invalid date" ? event.time : ""}
      </SpanStyled>
      <br></br>
      <span> {event.description}</span>
    </>
  );
};

const EventCard: FC<EventCardProps> = ({ event }) => {
  const history = useHistory();

  return (
    <ItemStyled onClick={() => goEvent(event, history)} key={event._id}>
      <List.Item.Meta
        title={` ${event.name}`}
        description={<Description event={event}></Description>}
        avatar={<Avatar src="/assets/icon/teatro.png" />}
      ></List.Item.Meta>
      <ArrowRightOutlined />
    </ItemStyled>
  );
};
export default EventCard;
