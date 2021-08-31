import { FC } from 'react'
import { List, Avatar } from 'antd'
import { Application } from 'core/interfaces/applications'
import { ArrowRightOutlined } from '@ant-design/icons'
import { CustomItem } from './styles'
import { useHistory } from 'react-router-dom'
import openCapacitorSite from 'components/openCapacitorBrowser'

interface ServiceItemProps {
  application: Application
}

const ServiceItem: FC<ServiceItemProps> = ({ application }) => {
  const history = useHistory()

  const openApp = (application: Application) => {
    console.log('Application', application)
    if (application.internalApp) {
      history.push({
        pathname: `/tabs/appView`,
        state: { app: application }
      })
    } else {
      openCapacitorSite(application.applicationURL || '')
    }
  }
  return (
    <CustomItem onClick={() => openApp(application)}>
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
