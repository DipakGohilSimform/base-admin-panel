import styled from 'styled-components'

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
      text-align: center;
    }
    .schedule-calendar-header {
      padding: 15px;
      margin-bottom: 0;
    }
    .ant-picker-calendar-date-content {
      display: none;
    }
    .ant-picker-cell-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 123px;
      height: 127px;
    }
  }
`
