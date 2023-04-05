import React from 'react'
import winXpLogo from "../../assets/images/win-xp-logo.png"
import './login.css'

const Login = () => {
  return (
    <div className="login-container">
        <div className="login-top">
            {/* TopSection */}
        </div>
        <div className="login-middle">
            {/* MiddleSection */}
            <div className="login-middle-left">
                {/* LeftSection */}
                
                <img src={winXpLogo} height="250px" width="250px" />
                <div className="begin-font">
                    To begin, click your user name
                </div>
            </div>
            {/* hr */}
            {/* <div className="divider"></div> */}
            <div className="login-middle-left">
                {/* RightSection */}
            </div> 
        </div>
        <div className="login-bottom">
            {/* BottomSection */}
        </div>

    </div>
  )
}

export default Login