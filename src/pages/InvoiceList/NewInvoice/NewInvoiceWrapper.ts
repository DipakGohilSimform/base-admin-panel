import styled from 'styled-components'

export const NewInvoiceWrapper = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }

  .wrapper {
    flex: 1 1 auto;
    background-color: var(--white);
    padding: 30px;
    border-radius: 10px;
    .header {
      margin-bottom: 30px;
      .title {
        font-size: 24px;
        font-weight: 700;
      }
    }
  }
  .invoice-form {
    flex: 1 1 50%;
    .img {
      svg {
        margin: 0 auto;
        cursor: pointer;
        margin-bottom: 30px;
      }
    }
    .ant-input,
    .ant-input-affix-wrapper,
    .ant-picker {
      max-height: 50px;
    }
    .ant-btn-default {
      color: var(--primary-100);
      border: 1px solid var(--primary-ribbon-100);
    }
    .new-invoice-form {
      .ant-picker-suffix {
        height: 20px;
        width: 20px;
        color: var(--primary-100);
      }
      .img {
        margin-bottom: 30px;
      }
      .half-input {
        display: flex;
        gap: 30px;
        margin-bottom: 30px;
      }
      .full-input {
        flex: 1 1 100%;
        margin-bottom: 30px;
      }
      .input-wrapper {
        flex: 1 1 50%;
        .address-field {
          svg {
            height: 20px;
            width: 20px;
          }
        }
      }
      .ant-picker {
        display: block;
        border-radius: 10px;
      }
      .input-title {
        display: inline-block;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 15px;
        cursor: pointer;
      }
      .ant-picker,
      .ant-input {
        padding: 14px 11px;
      }
    }
    .desc {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
    .ant-table-wrapper {
      margin-bottom: 30px;
      .ant-table-tbody {
        font-size: 14px;
        font-weight: 400;
        .ant-table-cell {
          max-height: 30px;
          &:first-child {
            color: var(--primary-100);
          }
        }
        .amount {
          color: var(--green);
        }
      }

      .delete {
        width: 32px;
        height: 32px;
        background-color: var(--orange-50);
        border-radius: 50%;
        padding: 10px;
        cursor: pointer;
        svg {
          color: var(--red);
        }
      }
    }
    .btn-wrapper {
      display: flex;
      gap: 30px;
    }
  }
  .invoice-preview {
    flex: 1 1 50%;
    .header {
      display: flex;
      justify-content: space-between;
      .cta {
        display: flex;
        gap: 15px;
        svg {
          cursor: pointer;
        }
      }
      svg {
        color: var(--primary-100);
      }
    }
    .invoice-content {
      .light-text {
        color: var(--gray);
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.002px;
        span {
          display: inline-block;
          padding-right: 5px;
          color: var(--cyan-100);
        }
      }
      .title-sm {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.002px;
        margin-bottom: 14px;
      }
      .address {
        max-width: 105px;
        margin-bottom: 13px;
      }
      .invoice-header {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        background-color: var(--lotion);
        padding: 30px;
        border-radius: 5px;
        margin-bottom: 60px;
        .invoice-header-left {
          .invoice-logo {
            margin-bottom: 37px;
          }
        }
        .invoice-header-right {
          .contact-wrapper {
            margin-bottom: 32px;
          }
          .title {
            font-size: 25px;
            font-weight: 600;
            margin-bottom: 11px;
          }
          .title-sm {
            margin-bottom: 0;
          }
          .invoice-number {
            margin-bottom: 15px;
          }
        }
      }
      .service-data {
        margin-bottom: 30px;
        .desc {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          .account-data {
            display: flex;
            gap: 13px;
          }
          span {
            font-size: 12px;
            font-weight: 600;
            color: var(--black);
          }
        }
      }
      .invoice-note {
        margin-bottom: 44px;
        .title-sm {
          margin-bottom: 17px;
        }
        .light-text {
          &:first-child {
            margin-bottom: 17px;
          }
        }
      }
      .invoice-footer {
        display: flex;
        gap: 10px;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
        border-top: 2px solid var(--lotion);
        .footer-content {
          max-width: 210px;
        }
      }
    }
  }
`
