import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import Header from '../Header'
import SideView from '../SideView'
import TrendingCard from '../TrendingCard/index'
import FailureView from '../FailureView'

class Gaming extends Component {
  state = {dataArray: [], isSuccess: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch('https://apis.ccbp.in/videos/gaming', options)
    if (response.ok) {
      const data = await response.json()
      const video = data.videos
      const dataDisplay = video.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({dataArray: dataDisplay, isSuccess: true})
      console.log(dataDisplay)
    }
    if (response.ok === false) {
      this.setState({isSuccess: false})
    }
  }

  recallApi = () => {
    this.getData()
  }

  render() {
    const {dataArray, isSuccess} = this.state
    return (
      <div>
        <Header />
        <div style={{display: 'flex'}}>
          <SideView />
          {isSuccess ? (
            <div>
              <h1>Gaming</h1>
              <div
                style={{display: 'flex', flexWrap: 'wrap', overflowY: 'scroll'}}
              >
                {dataArray.map(eachItem => (
                  <TrendingCard eachItem={eachItem} key={eachItem.id} />
                ))}
              </div>
            </div>
          ) : (
            <FailureView recallApi={this.recallApi} />
          )}
        </div>
      </div>
    )
  }
}
export default Gaming
