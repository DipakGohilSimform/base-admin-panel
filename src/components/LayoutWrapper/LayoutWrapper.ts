import styled from 'styled-components'
import { breakpointsDown } from '../../config/variable'

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  .form-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 1 448px;
    background-color: var(--white);
    max-width: 448px;
    padding: 50px;
    overflow: hidden;
    @media (${breakpointsDown.sm}) {
      padding: 25px;
    }
    .logo {
      width: 92px;
      height: 92px;
      margin-bottom: 40px;

      @media (${breakpointsDown.sm}) {
        width: 60px;
        height: 60px;
        margin-bottom: 20px;
      }
    }
    .title {
      font-size: 25px;
      font-weight: 600;
      margin-bottom: 40px;
      @media (${breakpointsDown.sm}) {
        margin-bottom: 20px;
      }
    }
    .cta-wrapper {
      display: flex;
      justify-content: center;
      gap: 22px;
      margin-bottom: 25px;

      @media (${breakpointsDown.xs}) {
        flex-wrap: wrap;
      }
    }
    .ant-divider {
      margin-bottom: 40px;
      @media (${breakpointsDown.sm}) {
        margin-bottom: 25px;
      }
      .divider-text {
        font-size: 16px;
        font-weight: 600;
      }
    }
    form {
      width: 100%;
      label {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 8px;
      }
      .ant-form-item {
        margin-bottom: 0;
      }
      .ant-input {
        background-color: var(--lotion);
        padding: 15px;
        border: transparent;
        border-radius: 10px;
        margin-bottom: 20px;
      }
      .ant-input-password {
        background-color: var(--lotion);
        padding: 0;
        border: transparent;
        border-radius: 10px;
        margin-bottom: 25px;

        input {
          margin-bottom: 0;
        }
        .ant-input-suffix {
          padding-right: 15px;
        }
      }
      .ant-checkbox-wrapper {
        display: flex;
        align-items: center;

        .ant-checkbox {
          border: 1px solid var(--black);
        }
      }
      .forget-password {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 400;
        @media (${breakpointsDown.sm}) {
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .reset {
          color: var(--primary-100);
        }
      }
      .terms-policy {
        display: flex;
        align-items: flex-start;
        a {
          color: var(--primary-100);
        }
      }
      .ant-checkbox-wrapper {
        margin-bottom: 30px;
        .ant-checkbox {
          background-color: var(--primary-100);
        }
        span {
          user-select: none;
        }
      }
      .signup-checkbox {
        .ant-checkbox {
          margin-top: -25px;
        }
      }
      .btn {
        width: 100%;
        margin-bottom: 30px;
      }
      .account {
        text-align: center;
        a {
          color: var(--primary-100);
        }
      }
    }

    @media (${breakpointsDown.lg}) {
      margin: 0 auto;
    }
  }
  .mockup {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
    background-color: var(--lotion);
    @media (${breakpointsDown.lg}) {
      display: none;
    }
    max-height: 100vh;
    position: sticky;
    top: 0;
    bottom: 0;
  }
`
