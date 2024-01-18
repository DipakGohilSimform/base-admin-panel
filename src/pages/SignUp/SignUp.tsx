import { useState } from 'react'
import { Checkbox, Divider, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { LayoutWrapper } from '../../components/LayoutWrapper/LayoutWrapper'
import Images from '../../config/images'
import Google from '../../components/icons/Google'
import Facebook from '../../components/icons/Facebook'
import { Button } from '../../components/ant'

function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  type FieldType = {
    name?: string
    email?: string
    userName?: string
    password?: string
  }
  return (
    <LayoutWrapper>
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
        <Form action="" layout="vertical">
          <Form.Item<FieldType> label="Full Name" name="name">
            <Input placeholder="Jiangyu" />
          </Form.Item>
          <Form.Item<FieldType> label="Email Address" name="email">
            <Input placeholder="example@gmail.com" />
          </Form.Item>
          <Form.Item<FieldType> label="Username" name="userName">
            <Input placeholder="johnkevine4362" />
          </Form.Item>
          <Form.Item<FieldType> label="Password" name="password">
            <Input.Password
              placeholder="password"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible
              }}
            />
          </Form.Item>
          <div className="terms-policy">
            <Checkbox className="signup-checkbox">
              By creating an account you agree to the{' '}
              <Link to="/">terms of use</Link> and our{' '}
              <Link to="/">privacy policy</Link>.
            </Checkbox>
          </div>
          <Link to="/dashboard">
            <Button type="primary" className="login-btn mb-28" block>
              Create account
            </Button>
          </Link>
          <p className="account">
            Already have an account? <Link to="/"> Log in</Link>
          </p>
        </Form>
      </div>
      <div className="mockup">
        <img src={Images.SigninMockup} alt="mockup" />
      </div>
    </LayoutWrapper>
  )
}

export default SignUp
