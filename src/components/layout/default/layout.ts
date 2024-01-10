import { Layout as AntLayout } from 'antd'
import styled from 'styled-components'

export const Layout = styled(AntLayout)`
  .ant-layout-sider {
    position: fixed;
    height: 100vh;
    overflow: auto;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: var(--white);
  }
  .logo {
    background-color: white;
    padding: 30px 50px;
  }

  .ant-menu-item {
    font-size: 16px;
    font-weight: 600;
    color: var(--black);
    opacity: 0.5;
    gap: 13px;
    margin-inline: 0;
  }
  .ant-menu-item-selected {
    opacity: 1;
    position: relative;
    color: var(--primary-100);
    background-color: var(--white);
    svg {
      color: var(--primary-100);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 53px;
      height: 48px;
      background: linear-gradient(
        90deg,
        #aca9ff 0%,
        rgba(172, 169, 255, 0) 91.25%
      );
    }
  }
  .sidebar-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 30px 25px;
    .sidebar-mockup {
      border-radius: 20px;
      background-color: var(--primary-50);
      padding: 15px;
      margin-bottom: 30px;

      .lamp {
        margin-top: -45px;
      }

      .ant-btn {
        background-color: var(--primary-100);
        width: 100%;
      }
    }
    .sidebar-logout {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .profile {
        display: flex;
        align-items: center;
        gap: 10px;

        .person-picture {
          width: 45px;
          height: 43px;
          border-radius: 12px;
          background: var(--pink);
        }

        .person-details {
          .name {
            font-size: 12px;
            font-weight: 600;
          }
          .type {
            font-size: 10px;
            font-weight: 400;
            opacity: 0.5;
          }
        }
      }
      svg {
        cursor: pointer;
      }
    }
  }
  .ant-layout-content {
    padding: 30px;
    min-height: 100vh;
    margin-left: 218px;
  }
`
