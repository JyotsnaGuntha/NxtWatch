import {useState} from 'react'
import ReactPlayer from 'react-player'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'


import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatus,
  PlayVideoStatusContainer,
  PlayVideoDot,
  PlaySocialButtonsContainer,
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
    setIsLiked(prevLiked => !prevLiked)
    setIsDisliked(false)
  }


  const onClickDislike = () => {
    setIsDisliked(prevDisliked => !prevDisliked)
    setIsLiked(false)
  }


  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const textColor = isDarkTheme ? '#ffffff' : '#231f20'
        const likeColor = isLiked ? '#2563eb' : '#64748b'
        const dislikeColor = isDisliked ? '#2563eb' : '#64748b'


        const isSaved = savedVideos.some(
          eachVideo => eachVideo.id === videoDetails.id,
        )
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
                    data-testid="likeButton"
                    style={{color: likeColor}}
                  >
                    Like
                  </button>
                </BtnContainer>
                <BtnContainer>
                  <button
                    type="button"
                    onClick={onClickDislike}
                    data-testid="dislikeButton"
                    style={{color: dislikeColor}}
                  >
                    Dislike
                  </button>
                </BtnContainer>
                <BtnContainer>
                  <button
                    type="button"
                    onClick={onClickSave}
                    style={{color: saveColor}}
                  >
                    {isSaved ? 'Saved' : 'Save'}
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
