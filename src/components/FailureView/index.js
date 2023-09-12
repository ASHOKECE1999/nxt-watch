const FailureView = props => {
  const {recallApi} = props

  const callTheApiAgain = () => {
    recallApi()
  }

  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are having some trouble</p>
      <button type="button" onClick={callTheApiAgain}>
        Retry
      </button>
    </div>
  )
}
export default FailureView
