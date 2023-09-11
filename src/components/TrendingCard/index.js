import {Link} from 'react-router-dom'
import './index.css'

const TrendingCard = props => {
  const {eachItem} = props
  const {id, thumbnailUrl, title, viewCount} = eachItem
  return (
    <li className="cardView">
      <Link to={`/videos/${id}`} className="linkClass">
        <img src={thumbnailUrl} alt={title} className="myImage" />

        <div style={{display: 'flex'}}>
          <div>
            <h1 className="myHeading">{title}</h1>
            <p>{viewCount}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default TrendingCard
