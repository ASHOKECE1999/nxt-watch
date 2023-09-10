import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'
import Card from '../Card/index'
import SideView from '../SideView'
import Header from '../Header'
import './index.css'

class Home extends Component {
  state = {searchInput: '', dataArray: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const data = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchInput}`,
      options,
    )
    const response = await data.json()
    const video = response.videos
    const dataDisplay = video.map(eachItem => ({
      id: eachItem.id,
      publishedAt: eachItem.published_at,
      thumbnailUrl: eachItem.thumbnail_url,
      title: eachItem.title,
      viewCount: eachItem.view_count,
      channelName: eachItem.channel.name,
      profileImageUrl: eachItem.channel.profile_image_url,
    }))
    console.log(dataDisplay)
    this.setState({dataArray: dataDisplay})
  }

  getInfoOfUser = event => {
    this.setState({searchInput: event.target.value})
  }

  getBasedOnRequirement = () => {
    this.getData()
  }

  render() {
    const {dataArray} = this.state
    return (
      <div className="homeContainer">
        <Header />
        <div className="SecondCon">
          <SideView />
          <div className="sec">
            <div className="cardInitial">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
                <button type="button">Close</button>
              </div>
              <div>
                <p>Buy Nxt Watch Premium</p>
                <h1>UPI</h1>
                <button type="button">GET IT NOW</button>
              </div>
            </div>
            <div>
              <input type="search" width={300} onChange={this.getInfoOfUser} />
              <button type="button" onClick={this.getBasedOnRequirement}>
                <AiOutlineSearch />
              </button>
            </div>
            <ul className="orderList">
              {dataArray.map(eachItem => (
                <Card eachItem={eachItem} id={eachItem.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
