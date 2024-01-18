import { Checkbox, Divider, Input, Form } from 'antd'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Images from '../../config/images'
import { LayoutWrapper } from '../../components/LayoutWrapper/LayoutWrapper'
import Google from '../../components/icons/Google'
import Facebook from '../../components/icons/Facebook'
import { Button } from '../../components/ant'

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  type FieldType = {
    email?: string
    password?: string
  }
  return (
    <LayoutWrapper>
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
        <Form action="" layout="vertical">
          <Form.Item<FieldType> label="Email Address" name="email">
            <Input placeholder="example@gmail.com" />
          </Form.Item>
          <Form.Item<FieldType> label="Password" name="password">
            <Input.Password
              placeholder="input password"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible
              }}
            />
          </Form.Item>
          <div className="forget-password">
            <Checkbox>Remember Me</Checkbox>
            <Link to="/" className="reset">
              Reset Password?
            </Link>
          </div>
          <Link to="/dashboard">
            <Button type="primary" className="btn">
              Log in
            </Button>
          </Link>
          <p className="account">
            Don&apos;t have account yet? <Link to="/sign-up"> New Account</Link>
          </p>
        </Form>
      </div>
      <div className="mockup">
        <img src={Images.LoginMockup} alt="mockup" />
      </div>
    </LayoutWrapper>
  )
}

export default Login
