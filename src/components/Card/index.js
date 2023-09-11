import {Link} from 'react-router-dom'
import './index.css'

const Card = props => {
  const {eachItem} = props
  const {
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channelName,
    profileImageUrl,
  } = eachItem
  return (
    <li className="cardView">
      <Link to={`/videos/${id}`} className="linkClass">
        <img src={thumbnailUrl} alt="video thumbnail" className="myImage" />

        <div style={{display: 'flex'}}>
          <div>
            <img src={profileImageUrl} alt={title} />
          </div>
          <div>
            <p className="myHeading">{title}</p>
            <p>{channelName}</p>
            <p>{viewCount}</p>
            <p>{publishedAt}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Card
