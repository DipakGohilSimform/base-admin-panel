import { Checkbox, Divider, Input } from 'antd'
import Images from '../../config/images'
import { LoginWrapper } from './LoginWrapper'
import Google from '../../components/icons/Google'
import Facebook from '../../components/icons/Facebook'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '../../components/ant'

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  return (
    <LoginWrapper>
      <div className="form-wrapper">
        <img src={Images.LogoSm} alt="logo" className="logo" />
        <h2 className="title">Log in</h2>
        <div className="cta-wrapper">
          <Button type="default" icon={<Google />}>
            Google
          </Button>
          <Button type="default" icon={<Facebook />}>
            Facebook
          </Button>
        </div>
        <Divider>
          <span className="divider-text">Or</span>
        </Divider>
        <form action="">
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <Input placeholder="Basic usage" id="email" />
          <label className="form-label" htmlFor="email">
            Password
          </label>
          <Input.Password
            placeholder="input password"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible
            }}
          />
          <div className="forget-password">
            <Checkbox>Remember Me</Checkbox>
            <Link to={'/'} className="reset">
              Reset Password?
            </Link>
          </div>
          <Link to={'/dashboard'}>
            <Button type="primary" className="login-btn">
              Log in
            </Button>
          </Link>
          <p className="new-account">
            Don't have account yet? <Link to={'/sign-in'}> New Account</Link>
          </p>
        </form>
      </div>
      <div className="login-mockup">
        <img src={Images.LoginMockup} alt="mockup" />
      </div>
    </LoginWrapper>
  )
}

export default Login
