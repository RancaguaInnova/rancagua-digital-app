import { FC } from "react"
import { List, Avatar } from "antd"
import { Application } from "interfaces/applications"
import { ArrowRightOutlined } from "@ant-design/icons"
import { CustomItem } from './styles'

interface ServiceItemProps {
  application: Application
}

const ServiceItem: FC<ServiceItemProps> = ({ application }) => {
  return (
    <CustomItem>
      <List.Item.Meta
        title={`${application.name}`}
        description={application.description}
        avatar={<Avatar src="/assets/icon/app.png" />}
      />
      <ArrowRightOutlined />
    </CustomItem>
  )
}
export default ServiceItem
