import { Moment } from "moment";
import { FC, useEffect } from "react";
import { Event } from "core/interfaces/event";
import EventCard from "../EventCard";
import { DivStyled, TextStyled } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { GetListEvents } from "providers/redux/actions/event";

interface EventListProps {
  listado: Event[];
  title?: string;
}

const eventList: Event[] = [];

const EventList: FC<EventListProps> = ({
  listado,
  title = "Próximos eventos",
}) => {
  return (
    <div>
      <DivStyled>{title}</DivStyled>
      {listado &&
        listado.length > 0 &&
        listado.map((item, index) => {
          return <EventCard key={item._id} event={item} />;
        })}

      {listado && listado.length === 0 && (
        <DivStyled>
          <TextStyled type="danger">
            No se encontraron eventos proximamente
          </TextStyled>{" "}
        </DivStyled>
      )}
    </div>
  );
};

export default EventList;
