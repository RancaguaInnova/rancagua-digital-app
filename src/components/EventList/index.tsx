import { Moment } from 'moment'
import { FC, useEffect } from 'react'
import { Event } from 'core/interfaces/event'
import EventCard from '../EventCard'
import { DivStyled,TextStyled } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { GetListEvents } from 'providers/redux/actions/event'

interface EventListProps {
  date: Moment
  title?: string
}

const eventList: Event[] = []


const EventList: FC<EventListProps> = ({
  date,
  title = 'Próximos eventos'
}) => {


  const dispatch = useDispatch()
  const { events } = useSelector((state: any) => state.event)
  const listado: Event[] = events || []

  useEffect(() => {
    const timer = setTimeout(() => dispatch(GetListEvents( date.format('YYYY-MM-DD'))), 60000)
    return () => clearTimeout(timer)
  })

  useEffect(
    () => {
      dispatch(GetListEvents( date.format('YYYY-MM-DD')))
   },
    [dispatch,date]
  )

  return (
    <div>
      <DivStyled>
        {title}
      </DivStyled>
      {listado && listado.length > 0 && listado.map((item, index) => {
        return <EventCard key={index} event={item} />
      })}

      {listado && listado.length===0 && (
         <DivStyled> <TextStyled type="danger">No se encontraron eventos proximamente</TextStyled>  </DivStyled>
      )}
    </div>
  )
}

export default EventList
