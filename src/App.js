import {Component} from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import MainContainer from './context/MainContainer'
import Login from './components/Login/index'
import Home from './components/Home/index'
import './App.css'

class App extends Component {
  state = {backGroundColor: false}

  onChangeBackgroundColor = () => {
    this.setState(prevState => ({
      backGroundColor: !prevState.backGroundColor,
    }))
  }

  render() {
    const {backGroundColor} = this.state

    return (
      <MainContainer.Provider
        value={{
          onChangeBackgroundColor: this.onChangeBackgroundColor,
          backGroundColor,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </MainContainer.Provider>
    )
  }
}

export default App
