import React from 'react'

const MainContainer = React.createContext({
  backGroundColor: false,
  onChangeBackgroundColor: () => {},
  getSavedVideos: () => {},
  savedVideos: [],
})

export default MainContainer
