import {Component} from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import MainContainer from './context/MainContainer'
import Login from './components/Login/index'
import Home from './components/Home/index'
import Trending from './components/Trending'
import './App.css'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  state = {backGroundColor: false, savedVideos: []}

  onChangeBackgroundColor = () => {
    this.setState(prevState => ({
      backGroundColor: !prevState.backGroundColor,
    }))
  }

  savedVideosFun = details => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, details],
    }))
  }

  render() {
    const {backGroundColor, savedVideos} = this.state

    return (
      <MainContainer.Provider
        value={{
          onChangeBackgroundColor: this.onChangeBackgroundColor,
          backGroundColor,
          getSavedVideos: this.savedVideosFun,
          savedVideos,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
          </Switch>
        </BrowserRouter>
      </MainContainer.Provider>
    )
  }
}

export default App
