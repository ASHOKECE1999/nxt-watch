/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-duplicates
import {BsBrightnessHigh} from 'react-icons/bs'

import {BsBrightnessHighFill} from 'react-icons/bs'

import './index.css'
import MainContainer from '../../context/MainContainer'
import CusDiv from './styledComponents'

const Header = () => (
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

      return (
        <CusDiv colors={backGroundColor}>
          <li>
            <img src={imgUrl} alt="website logo" />
          </li>
          <li className="myClass">
            <button type="button" onClick={changeTheColor}>
              {buttonTypeUrl}
            </button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
              alt="profile"
            />
            <button type="button">Logout</button>
          </li>
        </CusDiv>
      )
    }}
  </MainContainer.Consumer>
)

export default Header
