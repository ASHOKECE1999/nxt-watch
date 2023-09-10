import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import {async} from 'rxjs'

class Login extends Component {
  state = {
    isChecked: false,
    userName: '',
    userPass: '',
    errorMsg: '',
    isNeedToDisplay: false,
  }

  isCheckedValue = () => {
    // console.log(event.target.value)
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onFailureData = data => {
    this.setState({errorMsg: data})
    this.setState({isNeedToDisplay: true})
  }

  userNameChanger = event => {
    this.setState({userName: event.target.value})
  }

  onSuccessData = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 1, path: '/'})
    history.replace('/')
    this.setState({isNeedToDisplay: false})
  }

  getData = async event => {
    event.preventDefault()
    const {userName, userPass} = this.state
    const userData = {
      username: userName,
      password: userPass,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const data = await fetch('https://apis.ccbp.in/login', options)
    const response = await data.json()
    if (data.ok === true) {
      this.onSuccessData(response.jwt_token)
    } else {
      this.onFailureData(response.error_msg)
    }
    console.log(data, response)
  }

  userPassTaker = event => {
    this.setState({userPass: event.target.value})
  }

  render() {
    const {
      isChecked,
      userName,
      userPass,
      isNeedToDisplay,
      errorMsg,
    } = this.state
    const inputType = isChecked ? 'text' : 'password'
    console.log(isChecked)

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="myDiv">
        <div className="mySec">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </div>
          <form onSubmit={this.getData}>
            <label htmlFor="userName">USERNAME</label>
            <input
              type="text"
              id="userName"
              placeholder="Username"
              onChange={this.userNameChanger}
              value={userName}
            />
            <label htmlFor="passWord">PASSWORD</label>
            <input
              type={inputType}
              id="passWord"
              placeholder="Password"
              onChange={this.userPassTaker}
            />
            <div className="ash">
              <input
                type="checkbox"
                id="checkBox"
                onChange={this.isCheckedValue}
                value={userPass}
              />
              <label htmlFor="checkBox">Show Password</label>
            </div>
            <button type="submit" className="muButton">
              Login
            </button>
          </form>
          {isNeedToDisplay ? <p>*{errorMsg}</p> : ''}
        </div>
      </div>
    )
  }
}
export default Login
