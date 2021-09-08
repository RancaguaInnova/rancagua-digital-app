import { FC } from "react";
import { List, Avatar } from "antd";
import { Application } from "core/interfaces/applications";
import { ArrowRightOutlined } from "@ant-design/icons";
import { CustomItem } from "./styles";
import { useHistory } from "react-router-dom";
import { openApp } from "./functions"; 

interface ServiceItemProps {
  application: Application;
}
const ServiceItem: FC<ServiceItemProps> = ({ application }) => {
  const history = useHistory();
  return (
    <CustomItem onClick={() => openApp(application, history)}>
      <List.Item.Meta
        title={`${application.name}`}
        description={application.description}
        avatar={<Avatar src="/assets/icon/app.png" />}
      />
      <ArrowRightOutlined />
    </CustomItem>
  );
};
export default ServiceItem;
