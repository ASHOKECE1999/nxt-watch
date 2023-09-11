import MainContainer from '../../context/MainContainer'
import Header from '../Header'
import SideView from '../SideView'

const SavedVideos = () => (
  <MainContainer.Consumer>
    {value => {
      const {savedVideos} = value
      console.log(savedVideos)

      return (
        <div>
          <Header />
          <div style={{display: 'flex'}}>
            <SideView />
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {savedVideos.map(eachItem => (
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div>
                    <img src={eachItem.thumbnailUrl} alt={eachItem.title} />
                  </div>
                  <div>
                    <h1>{eachItem.description}</h1>
                    <p>{eachItem.channelName}</p>
                    <p>
                      {eachItem.viewCount}:{eachItem.publishedAt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }}
  </MainContainer.Consumer>
)

export default SavedVideos
