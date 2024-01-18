import { Menu } from 'antd'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Layout } from './layout'
import Images from '../../../config/images'
import Dashboard from '../../icons/Dashboard'
import Analytics from '../../icons/Analyitics'
import Invoice from '../../icons/Invoice'
import Schedule from '../../icons/Schedule'
import Calendar from '../../icons/Calendar'
import Messages from '../../icons/Messages'
import Notification from '../../icons/Notification'
import Settings from '../../icons/Settings'
import Logout from '../../icons/Logout'
import { Button } from '../../ant'

const { Sider, Content } = Layout

function AntLayout() {
  const navigate = useNavigate()
  return (
    <Layout>
      <Sider width={218} trigger={null} collapsible>
        <div className="logo">
          <img src={Images.Logo} alt="logo" />
        </div>
        <div className="menu-wrapper">
          <Menu
            onClick={({ key }) => {
              navigate(key)
            }}
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '/dashboard',
                icon: <Dashboard />,
                label: 'Dashboard'
              },
              {
                key: '/analytics',
                icon: <Analytics />,
                label: 'Analytics'
              },
              {
                key: '/invoice',
                icon: <Invoice />,
                label: 'Invoice'
              },
              {
                key: '/schedule',
                icon: <Schedule />,
                label: 'Schedule'
              },
              {
                key: '/calendar',
                icon: <Calendar />,
                label: 'Calendar'
              },
              {
                key: '/messages',
                icon: <Messages />,
                label: 'Messages'
              },
              {
                key: '/notification',
                icon: <Notification />,
                label: 'Notification'
              },
              {
                key: '/settings',
                icon: <Settings />,
                label: 'Settings'
              }
            ]}
          />
          <div className="sidebar-bottom">
            <div className="sidebar-mockup">
              <img src={Images.Lamp} alt="lamp" className="lamp" />
              <Button type="primary" size="small">
                Upgrade Now
              </Button>
            </div>
            <div className="sidebar-logout">
              <div className="profile">
                <div className="person-picture">
                  <img src={Images.Profile} alt="profile" />
                </div>
                <div className="person-details">
                  <p className="name">Easin Arafat</p>
                  <p className="type">Free Account</p>
                </div>
              </div>
              <Link to="/">
                <Logout />
              </Link>
            </div>
          </div>
        </div>
      </Sider>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AntLayout
