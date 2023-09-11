import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import Header from '../Header'
import SideView from '../SideView'
import TrendingCard from '../TrendingCard/index'

class Gaming extends Component {
  state = {dataArray: []}

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
    const data = await response.json()
    const video = data.videos
    const dataDisplay = video.map(eachItem => ({
      id: eachItem.id,
      thumbnailUrl: eachItem.thumbnail_url,
      title: eachItem.title,
      viewCount: eachItem.view_count,
    }))

    this.setState({dataArray: dataDisplay})
    console.log(dataDisplay)
  }

  render() {
    const {dataArray} = this.state
    return (
      <div>
        <Header />
        <div style={{display: 'flex'}}>
          <SideView />
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
        </div>
      </div>
    )
  }
}
export default Gaming
