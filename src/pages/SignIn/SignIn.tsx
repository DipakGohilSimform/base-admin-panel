import React from 'react'
import { SignInWrapper } from './SignInWrapper'
import { Checkbox, Divider, Input } from 'antd'
import Images from '../../config/images'
import Google from '../../components/icons/Google'
import Facebook from '../../components/icons/Facebook'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '../../components/ant'

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  return (
    <SignInWrapper>
      <div className="form-wrapper">
        <img src={Images.LogoSm} alt="logo" className="logo" />
        <h2 className="title">Sign Up</h2>
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
          <label className="form-label" htmlFor="name">
            Full Name
          </label>
          <Input placeholder="Full Name" id="name" />
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <Input placeholder="email" id="email" />
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <Input placeholder="Basic usage" id="username" />
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
          <div className="terms-policy">
            <input type="checkbox" />
            <label className="desc">
              By creating an account you agree to the{' '}
              <Link to={'#'}>terms of use</Link> and our{' '}
              <Link to={'#'}>privacy policy</Link>.
            </label>
          </div>
          <Link to={'/dashboard'}>
            <Button type="primary" className="login-btn">
              Create account
            </Button>
          </Link>
          <p className="have-account">
            Already have an account? <Link to={'/'}> Log in</Link>
          </p>
        </form>
      </div>
      <div className="login-mockup">
        <img src={Images.SigninMockup} alt="mockup" />
      </div>
    </SignInWrapper>
  )
}

export default SignIn
