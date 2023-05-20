import React, { useState, useRef, useEffect } from 'react'
import chessIcon from "../../../assets/images/chess-icon.webp"
import "./UserIcon.css"

const UserIcon: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const passwordRef = useRef<HTMLDivElement>(null)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (event.target instanceof HTMLInputElement) {
      return
    }
    setShowPassword(false)

  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={showPassword ? "icon-container-clicked" : "icon-container"}>
      <div className="icon-container" onClick={handleShowPassword}>
        <img className="chess-icon" height="50px" width="50px" src={chessIcon} alt="" />
        <p className="icon-name">Chad Lew</p>
        </div>
      {showPassword && (
        <form action="submit">
          <label className="type-password" htmlFor="password">Type your password</label>
        <div ref={passwordRef} className="password-input">
          <input name="password" autoComplete='true' type="password" placeholder="Enter your password" />
        </div>
        </form>
      )}
      
    </div>
  )
}

export default UserIcon
