import { FC } from "react"

interface EventDetailProps{
    id: number;
}

const EventDetail: FC<EventDetailProps> = ({ id }) => {
    console.log("detail id: ", id)
  return (
   <div>{id}</div>
  )
}
export default EventDetail
