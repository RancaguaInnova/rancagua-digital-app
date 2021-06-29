import { Card, Typography } from "antd"
import { Moment } from "moment"
import React, { FC } from "react"

interface EventListProps {
  date: Moment
}

const EventList: FC<EventListProps> = ({ date }) => {
  console.log("soy la fecha seleccionada", date.format("DD-MM-YYYY"))
  return (
    <Card>
      <Typography.Title level={5} type="success">
        Mostrando los eventos del día :{date.format("DD-MM-YYYY")}
      </Typography.Title>
      <ul>
        <li>10:00 - Evento 1</li>
        <li>12:00 - Evento 2</li>
        <li>13:00 - Evento 3</li>
        <li>14:20 - Evento 4</li>
        <li>15:30 - Evento 5</li>
      </ul>
    </Card>
  )
}

export default EventList
