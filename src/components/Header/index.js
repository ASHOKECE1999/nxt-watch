/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-duplicates
import {BsBrightnessHigh} from 'react-icons/bs'
import {Link, withRouter} from 'react-router-dom'
import {BsBrightnessHighFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import './index.css'
import MainContainer from '../../context/MainContainer'
import CusDiv from './styledComponents'

const Header = props => (
  <MainContainer.Consumer>
    {value => {
      const {backGroundColor, onChangeBackgroundColor} = value
      const imgUrl = backGroundColor
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const buttonTypeUrl = backGroundColor ? (
        <BsBrightnessHigh />
      ) : (
        <BsBrightnessHighFill />
      )

      const changeTheColor = () => {
        onChangeBackgroundColor()
      }

      const logoutFunction = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/')
      }

      return (
        <CusDiv colors={backGroundColor}>
          <ul className="headerList">
            <Link to="/">
              <li>
                <img src={imgUrl} alt="website logo" />
              </li>
            </Link>

            <li className="myClass">
              <button type="button" onClick={changeTheColor}>
                {buttonTypeUrl}
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                alt="profile"
              />
              <div>
                <div className="popup-container">
                  <Popup
                    modal
                    trigger={
                      <button type="button" className="trigger-button">
                        Logout
                      </button>
                    }
                  >
                    {close => (
                      <div className="closeBar">
                        <div>
                          <p>
                            React is a popular and widely used programming
                            language
                          </p>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="trigger-button"
                            onClick={() => logoutFunction()}
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
              </div>
            </li>
          </ul>
        </CusDiv>
      )
    }}
  </MainContainer.Consumer>
)

export default withRouter(Header)
