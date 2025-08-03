import {useState} from 'react'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatus,
  PlayVideoStatusContainer,
  PlayVideoDot,
  PlaySocialButtonsContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelImage,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  BtnContainer,
} from './styledComponents'

const PlayVideoView = props => {
  const {videoDetails} = props
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)

  const onClickLike = () => {
    setIsLiked(prev => !prev)
    setIsDisliked(false)
  }

  const onClickDislike = () => {
    setIsDisliked(prev => !prev)
    setIsLiked(false)
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const textColor = isDarkTheme ? '#ffffff' : '#231f20'
        const likeColor = isLiked ? '#2563eb' : '#64748b'
        const dislikeColor = isDisliked ? '#2563eb' : '#64748b'

        const isSaved = savedVideos.some(each => each.id === videoDetails.id)
        const saveColor = isSaved ? '#2563eb' : '#64748b'

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        return (
          <VideoPlayer>
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <PlayVideoTitle color={textColor}>
              {videoDetails.title}
            </PlayVideoTitle>
            <PlayVideoStatusContainer>
              <PlayVideoStatus color={textColor}>
                {videoDetails.viewCount} views
                <PlayVideoDot>&#8226;</PlayVideoDot>
                {videoDetails.publishedAt}
              </PlayVideoStatus>
              <PlaySocialButtonsContainer>
                <BtnContainer>
                  <button
                    type="button"
                    onClick={onClickLike}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    data-testid="likeButton"
                  >
                    <AiOutlineLike size={25} color={likeColor} />
                    <ButtonText color={likeColor}>Like</ButtonText>
                  </button>
                </BtnContainer>

                <BtnContainer>
                  <button
                    type="button"
                    onClick={onClickDislike}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    data-testid="dislikeButton"
                  >
                    <AiOutlineDislike size={25} color={dislikeColor} />
                    <ButtonText color={dislikeColor}>Dislike</ButtonText>
                  </button>
                </BtnContainer>

                <BtnContainer>
                  <button
                    type="button"
                    onClick={onClickSave}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <BiListPlus size={25} color={saveColor} />
                    <ButtonText color={saveColor}>
                      {isSaved ? 'Saved' : 'Save'}
                    </ButtonText>
                  </button>
                </BtnContainer>
              </PlaySocialButtonsContainer>
            </PlayVideoStatusContainer>
            <HrLine />
            <ChannelContainer>
              <ChannelImage
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <ChannelInfo>
                <ChannelName color={textColor}>{videoDetails.name}</ChannelName>
                <ChannelSubscribers color={textColor}>
                  {videoDetails.subscriberCount} Subscribers
                </ChannelSubscribers>
                <ChannelDescription color={textColor}>
                  {videoDetails.description}
                </ChannelDescription>
              </ChannelInfo>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default PlayVideoView
