import { Calendar, Badge } from "antd"
import "./styles.scss"

function getListData(value: { date: () => any },listado:any) {
  let listData
  console.log("d",listado)
  console.log("value date",value.date())
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
      ]
      break
    case 10:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
        { type: "error", content: "This is error event." },
      ]
      break
    case 15:
      listData = [
        { type: "warning", content: "This is warning event" },
        { type: "success", content: "This is very long usual event。。...." },
        { type: "error", content: "This is error event 1." },
        { type: "error", content: "This is error event 2." },
        { type: "error", content: "This is error event 3." },
        { type: "error", content: "This is error event 4." },
      ]
      break
    default:
  }
  return listData || []
}

function dateCellRender(value: any,listado:any) {
  const listData = getListData(value,listado)
  return (
    <>
      {listData.map((item: any) => (
        <Badge key={item.content} status={item.type} />
      ))}
    </>
  )
}

function getMonthData(value: { month: () => number }) {
  if (value.month() === 8) {
    return 1394
  }
}

function monthCellRender(value: any) {
  const num = getMonthData(value)
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null
}

export { monthCellRender, dateCellRender }
