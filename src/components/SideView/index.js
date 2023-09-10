import {Link} from 'react-router-dom'

const SideView = () => (
  <div className="asideView">
    <ul>
      <Link to="/" className="linkClass">
        <li>Home</li>
      </Link>
      <Link to="/trending" className="linkClass">
        <li>Trending</li>
      </Link>
      <Link to="/gaming" className="linkClass">
        <li>Gaming</li>
      </Link>
      <Link to="/saved-videos" className="linkClass">
        <li>Saved Videos</li>
      </Link>
    </ul>
    <div className="cardViewAs">
      <p>CONTACT US</p>
      <p>Enjoy! Now to see your channels and recommendations!</p>
      <div>
        <img
          src=" https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </div>
    </div>
  </div>
)
export default SideView
