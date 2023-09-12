import {Link} from 'react-router-dom'
import MainContainer from '../../context/MainContainer'
import Header from '../Header'
import SideView from '../SideView'

const SavedVideos = () => (
  <MainContainer.Consumer>
    {value => {
      const {savedVideos} = value
      const isMax = savedVideos.length > 0
      console.log(savedVideos)

      return (
        <ul>
          <Header />
          <div style={{display: 'flex'}}>
            <SideView />
            <div>
              {isMax ? (
                <div>
                  <h1>Saved Videos</h1>
                  <ul style={{display: 'flex', flexDirection: 'column'}}>
                    {savedVideos.map(eachItem => (
                      <Link to={`/videos/${eachItem.id}`}>
                        <li style={{display: 'flex', alignItems: 'center'}}>
                          <div>
                            <img
                              src={eachItem.thumbnailUrl}
                              alt={eachItem.title}
                            />
                          </div>
                          <div>
                            <h1>{eachItem.description}</h1>
                            <p>{eachItem.channelName}</p>
                            <p>
                              {eachItem.viewCount}:{eachItem.publishedAt}
                            </p>
                          </div>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <h1>No saved videos found</h1>
                  <p>Save your videos by clicking a button</p>
                </div>
              )}
            </div>
          </div>
        </ul>
      )
    }}
  </MainContainer.Consumer>
)

export default SavedVideos
