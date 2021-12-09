import { FC } from "react";
import { List, Avatar } from "antd";
import { Application } from "core/interfaces/applications";
import { ArrowRightOutlined } from "@ant-design/icons";
import { CustomItem } from "./styles";
import { useHistory } from "react-router-dom";
import { openApp } from "./functions";
import { withSession } from "hoc/withSession";
import { Session } from 'core/types/session'
import { useDispatch, useSelector } from 'react-redux'


interface ServiceItemProps {
  application: Application;
  session: Session;
  sessionLoading: boolean;
}
const ServiceItem: FC<ServiceItemProps> = ({ application, session, sessionLoading }) => {
  const history = useHistory();
  const dispatch = useDispatch()

  console.log(session);


  return (

    <CustomItem onClick={() => openApp(application, history, session, dispatch)}>
      <List.Item.Meta
        title={`${application.name}`}
        description={application.description}
        avatar={<Avatar src="/assets/icon/app.png" />}
      />
      <ArrowRightOutlined />
    </CustomItem>
  );



};





export default withSession(ServiceItem);
