import styled from 'styled-components'
import { Modal } from 'antd'

export const CalendarWrapper = styled.div`
  .calendar-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    .cta-wrapper {
      display: flex;
      gap: 20px;
    }
    .ant-btn {
      width: auto;
      padding: 11px 22px;
      background-color: var(--primary-50);
      border: none;

      &:focus,
      &:hover {
        background-color: var(--primary-100);
        color: var(--white) !important;
      }
    }
    @media (max-width: 992px) {
      flex-wrap: wrap;
      gap: 20px;
    }
  }
  .schedule-wrapper {
    display: flex;
    gap: 30px;
    @media (max-width: 1100px) {
      flex-wrap: wrap;
    }
    .schedule-card {
      flex: 1 1 266px;
      height: 100%;
      padding: 30px;
      border-radius: 10px;
      background-color: var(--white);

      .ant-btn {
        margin-bottom: 20px;
        svg {
          margin-top: -5px;
        }
      }
      .ant-picker-calendar {
        padding: 15px;
        margin-bottom: 30px;
        border: 1px solid var(--lotion);
        border-radius: 10px;

        .ant-picker-body {
          padding: 0;
        }
        .ant-picker-cell {
          height: 26px;
          width: 26px;
          padding: 0;
          transform: scale(0.9);
        }
        .ant-picker-cell-inner {
          background-color: transparent;
          &::before {
            border: none;
          }
        }
        .ant-picker-cell-selected {
          background-color: var(--primary-100);
          border-radius: 50%;
        }
        .ant-picker-panel {
          border: none;
        }
      }

      .create-event-modal {
        .ant-modal-close {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
    }
    .schedule-calendar-header {
      margin-bottom: 18px;
      svg {
        cursor: pointer;
      }
    }
    .people-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 18px;
      }
      .ant-input {
        padding: 15px 40px;
        border-radius: 10px;
        margin-bottom: 20px;
      }
      .people-details {
        .details {
          display: flex;
          gap: 15px;
          align-items: center;
          padding: 11px;
          border-bottom: 1px solid var(--lotion);
          .name {
            font-size: 12px;
            font-weight: 400;
            margin-bottom: 3px;
          }
          .email {
            font-size: 10px;
            font-weight: 400;
            opacity: 0.5;
          }
        }
      }
      .ant-btn {
        margin-top: 90px;
        margin-bottom: 0;
        color: var(--primary-100);
      }
    }
  }
  .calendar {
    flex: 1 1 auto;
    background-color: var(--white);
    border-radius: 10px;
    overflow: hidden;
    thead {
      height: 80px;
      background-color: var(--lotion);
    }
    th {
      font-size: 16px;
      font-weight: 600;
      text-align: center;
    }
    .schedule-calendar-header {
      padding: 15px;
      margin-bottom: 0;
    }
    .ant-picker-cell-inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      height: 127px;
    }
    .ant-picker-calendar-date {
      margin: 0;
    }
    .ant-picker-calendar-date-value {
      width: 100%;
      text-align: center;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 4px;
      opacity: 0.7;
    }
    .ant-picker-calendar-date-content {
      width: 100%;
      .events {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style: none;
      }
    }
    .ant-picker-calendar-date-today {
      background-color: var(--white) !important;
      border-color: var(--orange-100);
      .ant-picker-calendar-date-value {
        color: var(--orange-100) !important;
        opacity: 1;
      }
    }
  }
`
export const EventModal = styled(Modal)`
  .ant-modal-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 55px;
  }
  .ant-modal-close {
    height: 40px;
    width: 40px;
    background-color: var(--orange-50);
    border-radius: 50%;
    &:hover {
      background-color: var(--orange-100);
    }
  }
  .ant-modal-body {
    box-shadow: none !important;
  }
  .ant-radio-group {
    background-color: var(--orange-50);
    padding: 5px;
    border-radius: 10px;
    margin-bottom: 20px;
    .ant-radio-button-wrapper {
      border: none;
      border-radius: 10px;

      &::before {
        background: none;
      }
    }
    .ant-radio-button-wrapper-checked {
      color: var(--white);
    }
  }
  .ant-input {
    padding: 12px 20px;
    margin-bottom: 30px;
    background-color: var(--lotion);
  }
  .wrapper {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--orange-50);
    }
    .time {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
    .time-zone {
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      margin-bottom: 15px;
      opacity: 0.8;
    }
  }
  .find-time {
    font-size: 14px;
    font-weight: 600;
    color: var(--orange-100);
  }
  .btn-wrapper {
    display: flex;
    gap: 25px;
    margin-bottom: 30px;

    .ant-btn {
      max-width: 250px;
    }
    .ant-btn-default {
      border: 1px solid var(--primary-ribbon-100);
      &:hover {
        border: 1px solid var(--primary-ribbon-300);
      }
    }
  }
  .ant-btn {
    &:active {
      background: var(--primary-ribbon-400) !important;
    }
  }
`
