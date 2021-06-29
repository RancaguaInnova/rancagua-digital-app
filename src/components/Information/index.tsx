import React from "react"
import "./styles.scss"

const Information = () => {
  return (
    <div className="iframe-container">
      <iframe
        src="https://webviews.smartrancagua.com/view/information"
        allowFullScreen
        frameBorder={0}
      ></iframe>
    </div>
  )
}

export default Information
