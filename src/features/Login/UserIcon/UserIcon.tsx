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
    if (passwordRef.current && !passwordRef.current.contains(event.target as Node)) {
      setShowPassword(false)
    }
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
        <div className="icon-name">Chad Lew</div>
      </div>
      {showPassword && (
        <form action="submit">
        <div ref={passwordRef} className="password-input">
          <input autoComplete='true' type="password" placeholder="Enter your password" />
        </div>
        </form>
      )}
    </div>
  )
}

export default UserIcon
