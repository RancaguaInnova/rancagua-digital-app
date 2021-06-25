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
  border-radius: 5px;
  width: 95%;
  margin: 0 auto;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  background: #e7f3f5;
`

const ServiceItem: FC<ServiceItemProps> = ({ application }) => {
  return (
    <ItemStyled>
      <List.Item.Meta
        title={application.name}
        description={application.description}
      />
      <ArrowRightOutlined />
    </ItemStyled>
  )
}
export default ServiceItem
