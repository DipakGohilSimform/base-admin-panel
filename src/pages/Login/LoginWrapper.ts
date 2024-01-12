import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  .form-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 1 448px;
    background-color: var(--white);
    max-width: 448px;
    padding: 50px;
    @media (max-width: 576px) {
      padding: 25px;
    }
    .logo {
      width: 92px;
      height: 92px;
      margin-bottom: 40px;

      @media (max-width: 576px) {
        width: 60px;
        height: 60px;
        margin-bottom: 20px;
      }
    }
    .title {
      font-size: 25px;
      font-weight: 600;
      margin-bottom: 40px;
      @media (max-width: 576px) {
        margin-bottom: 20px;
      }
    }
    .cta-wrapper {
      display: flex;
      justify-content: center;
      gap: 22px;
      margin-bottom: 25px;

      @media (max-width: 480px) {
        flex-wrap: wrap;
      }
    }
    .ant-divider {
      margin-bottom: 40px;
      @media (max-width: 576px) {
        margin-bottom: 25px;
      }
      .divider-text {
        font-size: 16px;
        font-weight: 600;
      }
    }
    form {
      width: 100%;
      .form-label {
        display: inline-block;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 8px;
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
        margin-bottom: 40px;
        @media (max-width: 576px) {
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
      .login-btn {
        width: 100%;
        margin-bottom: 30px;
      }
      .new-account {
        text-align: center;
        a {
          color: var(--primary-100);
        }
      }
    }

    @media (max-width: 992px) {
      margin: 0 auto;
    }
  }
  .login-mockup {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
    background-color: var(--lotion);
    @media (max-width: 992px) {
      display: none;
    }
  }
`
