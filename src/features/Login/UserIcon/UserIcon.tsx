import React from 'react'
import chessIcon from "../../../assets/images/chess-icon.webp"
import "./UserIcon.css"

const UserIcon = () => {
  return (
    <div className="icon-wrapper">
        <div className="icon-container">
            <img className="chess-icon" height="50px" width="50px" src={chessIcon} alt="" />
            <div className="icon-name">
              Chad Lew
            </div>
        </div>
    </div>
  )
}

export default UserIcon