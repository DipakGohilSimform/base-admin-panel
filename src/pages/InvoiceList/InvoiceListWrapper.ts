import styled from 'styled-components'

const InvoiceListWrapper = styled.div`
  .invoice-list-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;

    @media (max-width: 992px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    .page-title {
      font-size: 24px;
      font-weight: 700;
    }
    .invoice-cta {
      display: flex;
      gap: 20px;
      .ant-input-affix-wrapper {
        max-width: 230px;
        border-radius: 10px;
      }
      .ant-btn {
        height: 40px;
        min-width: 122px;
        background-color: var(--primary-100);
        color: var(--white);
        border-radius: 10px;
      }
    }
  }
  .ant-table-content {
    .anticon-caret-up {
      display: none;
    }
    .ant-table-column-title {
      flex: 0;
    }
    .ant-table-column-sorters {
      display: flex;
      justify-content: flex-start;
      align-items: baseline;
      gap: 5px;
    }
    .ant-table-column-sort {
      background-color: var(--white);
    }
    .ant-table-cell {
      &:first-child {
        padding-left: 20px;
      }
    }
    .ant-table-row-selected {
      background-color: var(--primary-50);
    }
    .ant-table-row {
      .ant-table-cell-row-hover {
        background-color: var(--cyan-50);
      }
    }
    .ant-checkbox {
      background-color: var(--pink);
    }
  }
  .ant-table-wrapper
    .ant-table-tbody
    .ant-table-row.ant-table-row-selected
    > .ant-table-cell-row-hover {
    background-color: var(--cyan-50);
  }
  .profile {
    width: 36px;
    height: 36px;
    background-color: var(--lavender);
    border-radius: 50%;
    img {
      object-fit: contain;
    }
  }
  .ant-tag {
    padding: 13px 45px;
    border-radius: 22px;
  }
`

export default InvoiceListWrapper
