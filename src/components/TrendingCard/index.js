import {Link} from 'react-router-dom'
import './index.css'

const TrendingCard = props => {
  const {eachItem} = props
  const {id, thumbnailUrl, title, viewCount} = eachItem
  return (
    <li className="cardView">
      <Link to={`/videos/${id}`} className="linkClass">
        <img src={thumbnailUrl} alt="video thumbnail" />

        <div style={{display: 'flex'}}>
          <div>
            <p className="myHeading">{title}</p>
            <p>{viewCount}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default TrendingCard
