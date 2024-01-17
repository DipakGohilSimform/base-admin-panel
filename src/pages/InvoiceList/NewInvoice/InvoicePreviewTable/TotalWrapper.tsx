import styled from 'styled-components'

export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .cell {
    display: flex;
    border-bottom: 2px solid var(--lotion);
    p {
      padding: 16px;
      &:nth-child(1) {
        width: 135px;
        max-width: 100%;
      }
      &:nth-child(2) {
        width: 180px;
        max-width: 100%;
      }
    }
    .total {
      font-size: 14px;
      font-weight: 600;
    }
    .total-amount {
      font-size: 16px;
      font-weight: 600;
      color: var(--cyan-100);
    }
    &:last-child {
      margin-bottom: 25px;
    }
  }
`
