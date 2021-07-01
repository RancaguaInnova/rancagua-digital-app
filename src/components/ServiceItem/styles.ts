import { List } from "antd"

import styled from "styled-components"

const { Item } = List
export const CustomItem = styled(Item)`
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
