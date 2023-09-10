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
        <img src={thumbnailUrl} alt={title} className="myImage" />

        <div style={{display: 'flex'}}>
          <div>
            <img src={profileImageUrl} alt={title} />
          </div>
          <div>
            <h1 className="myHeading">{title}</h1>
            <p>{channelName}</p>
            <p>
              {viewCount}:{publishedAt}
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Card
