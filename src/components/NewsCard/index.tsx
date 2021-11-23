import { FC } from 'react'
import { Tweet } from 'core/interfaces/tweet'
import Linkify from 'react-linkify'
import { Card } from 'antd'
import styled from 'styled-components'
import moment from 'moment'
import './styles.scss'
import { Browser } from '@capacitor/browser'
import openCapacitorSite from 'components/openCapacitorBrowser'
import { FaBookReader } from 'react-icons/fa'
const idLocale = require('moment/locale/es')
moment.updateLocale('es', idLocale)
export const CardStyled = styled(Card)`
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.15);
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: calc(100% - 20px);

  backdrop-filter: blur(5px);
`

interface NewsCardProps {
  tweet: Tweet
}
const NewsCard: FC<NewsCardProps> = ({ tweet }) => {
  const { Meta } = Card
  const openApp = (url: string) => {
    console.log('url', url)

    openCapacitorSite(url || '')
  }

  return (
    <>
      <CardStyled
        hoverable
        cover={
          tweet.attachments?.media_keys[0]?.url ? (
            <img
              className='card-img-top'
              src={tweet.attachments?.media_keys[0]?.url || ''}
              alt=''
            />
          ) : (
            tweet.attachments?.media_keys[0]?.type === 'video' && (
              <img
                className='card-img-top'
                src={tweet.attachments?.media_keys[0]?.preview_image_url || ''}
                alt=''
              />
            )
          )
        }
      >
        {/*  <h5>@munirancagua</h5> */}
        <Linkify
          componentDecorator={(decoratedHref, decoratedText, key) => (
            <p key={key}>
              {' '}
              <a onClick={() => openApp(decoratedHref)}>
                <FaBookReader></FaBookReader> &nbsp; {decoratedText}
              </a>
            </p>
          )}
        >
          {tweet.text}
        </Linkify>
        <p></p>
        <Meta title='' description={moment(tweet.created_at).fromNow()} />
      </CardStyled>
    </>
  )
}
export default NewsCard
