import { Calendar, Badge } from "antd";
import { Event } from "core/interfaces/event";
import moment from "moment";
import "./styles.scss";

interface IEventData {
  type: string;
  content: string;
  id: string;
}

function getListData(value: any, listado: Event[]) {
  let listData: IEventData[] = [];

  let filtrado = listado.filter((item: Event) => {
    let date = moment(item.date);
    return date.format("YYYY-MM-DD") === value.format("YYYY-MM-DD");
  });

  filtrado.forEach((item: Event) => {
    listData.push({ content: item.name, type: "success", id: item._id });
  });

  return listData;
}

function dateCellRender(value: any, listado: Event[]) {
  const listData = getListData(value, listado);
  return (
    <>
      {listData.map((item: any) => (
        <Badge status={item.type} key={item.id} />
      ))}
    </>
  );
}

function getMonthData(value: { month: () => number }) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value: any) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

export { monthCellRender, dateCellRender };
