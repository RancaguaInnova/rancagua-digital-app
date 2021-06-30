import { List, Avatar } from "antd"
import { FC } from "react"
import InfiniteScroll from "react-infinite-scroller"
import { Application } from "../../interfaces/applications"
import styled from "styled-components"
import { ArrowRightOutlined } from "@ant-design/icons"
interface ServiceItemProps {
  application: Application
}
const { Item } = List
const ItemStyled = styled(Item)`
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.15);
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  padding: 10px;

  backdrop-filter: blur(5px);
`

const ServiceItem: FC<ServiceItemProps> = ({ application }) => {
  return (
    <ItemStyled>
      <List.Item.Meta
        title={`${application.name}`}
        description={application.description}
        avatar={<Avatar src="/assets/icon/app.png" />}
      />
      <ArrowRightOutlined />
    </ItemStyled>
  )
}
export default ServiceItem
