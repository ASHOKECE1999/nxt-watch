import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import SideView from '../SideView'
import Header from '../Header'
import './index.css'
import MainContainer from '../../context/MainContainer'

class VideoItemDetails extends Component {
  state = {displayObject: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const data = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    const response = await data.json()
    const eachItem = response.video_details
    const dataDisplay = {
      id: eachItem.id,
      publishedAt: eachItem.published_at,
      thumbnailUrl: eachItem.thumbnail_url,
      title: eachItem.title,
      viewCount: eachItem.view_count,
      channelName: eachItem.channel.name,
      profileImageUrl: eachItem.channel.profile_image_url,
      videoUrl: eachItem.video_url,
      subscriberCount: eachItem.channel.subscriber_count,
      description: eachItem.description,
    }
    console.log(dataDisplay)
    this.setState({displayObject: dataDisplay})
  }

  sendData = () => {
    const {displayObject} = this.state
  }

  displaySuccess = () => (
    <MainContainer.Consumer>
      {value => {
        const {displayObject} = this.state
        const {getSavedVideos} = value
        const {
          publishedAt,
          thumbnailUrl,
          title,
          viewCount,
          channelName,
          profileImageUrl,
          videoUrl,
          subscriberCount,
          description,
        } = displayObject

        const sendData = () => {
          getSavedVideos(displayObject)
        }

        return (
          <div>
            <div className="responsive-container">
              <ReactPlayer url={videoUrl} width={1000} />
            </div>
            <div>
              <div>
                <h1>{title}</h1>
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{display: 'flex'}}>
                    <p>{viewCount}</p>
                    <p>{publishedAt}</p>
                  </div>
                  <div style={{display: 'flex'}}>
                    <p>like</p>
                    <p>dislike</p>
                    <button type="button" onClick={sendData}>
                      save
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={thumbnailUrl} alt={title} />
                <div style={{marginLeft: '10px'}}>
                  <h1>{channelName}</h1>
                  <p>{subscriberCount}subscriber</p>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </MainContainer.Consumer>
  )

  render() {
    return (
      <div>
        <Header />
        <div style={{display: 'flex'}}>
          <SideView />
          <div>{this.displaySuccess()}</div>
        </div>
      </div>
    )
  }
}
export default VideoItemDetails
