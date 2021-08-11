import { FC } from "react"
import { List, Avatar } from "antd"
import { Application } from "interfaces/applications"
import { ArrowRightOutlined } from "@ant-design/icons"
import { CustomItem } from './styles'
import openCapacitorSite from "components/openCapacitorBrowser"

interface ServiceItemProps {
  application: Application
}

const ServiceItem: FC<ServiceItemProps> = ({ application }) => {
  console.log("aplication", application)
  return (
    <CustomItem>
      <List.Item.Meta
        title={`${application.name}`}
        description={application.description}
        avatar={<Avatar src="/assets/icon/app.png" />}
      />
      <ArrowRightOutlined onClick={() => openCapacitorSite(application!.applicationURL || "")} />
    </CustomItem>
  )
}
export default ServiceItem
