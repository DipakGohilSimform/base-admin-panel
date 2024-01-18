import styled from 'styled-components'
import { breakpointsDown } from '../../config/variable'

export const DashboardStyle = styled.div`
  height: 100%;
  width: 100%;
  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
    .page-title {
      font-size: 24px;
      font-weight: 700;
    }
    .calender {
      display: flex;
      gap: 15px;

      .ant-picker {
        border-radius: 5px;
        border: none;
        padding: 11px 17px;

        &:hover {
          background-color: var(--primary-ribbon-50);
        }
      }
      .ant-picker-focused {
        background-color: var(--primary-ribbon-100);
      }
    }
    @media (${breakpointsDown.xl}) {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
  .analytics-cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
    margin-bottom: 30px;

    .analytic-card {
      display: flex;
      align-items: center;
      gap: 23px;
      flex: 1 0 276px;
      padding: 28px;
      background-color: var(--white);
      border-radius: 10px;

      .number {
        font-size: 22px;
        font-weight: 800;
      }
      .desc {
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
  .mid-wrapper {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    margin-bottom: 30px;
    .dashboard-reports {
      flex: 1 1 auto;
      height: 408px;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .dashboard-analytics {
      flex: 1 1 auto;
      height: 408px;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .bottom-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    .recent-orders {
      flex: 1 1 700px;
      padding: 25px;
      background-color: var(--white);
      border-radius: 10px;
      .ant-table-cell {
        font-size: 12px;
        font-weight: 400;
      }
      .total {
        text-align: center;
        font-size: 12px;
        font-weight: 700;
        color: var(--cyan-100);
      }
    }
    .top-products {
      flex: 1 1 430px;
      padding: 25px;
      background-color: var(--white);
      border-radius: 10px;
    }
    .heading {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      font-weight: 700;
      opacity: 0.7;
      margin-bottom: 24px;
    }
    .ant-btn {
      border: none;
      background: none;
      padding: 10px;
      border-radius: 50%;
    }
    .products-wrapper {
      display: flex;
      flex-direction: column;

      .product-card {
        display: flex;
        gap: 20px;
        .product-image {
          overflow: hidden;
          width: 96px;
          height: 96px;
          border-radius: 10px;
        }
        .product-description {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`
