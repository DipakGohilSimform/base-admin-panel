import Table, { ColumnsType } from 'antd/es/table'
import React from 'react'
import { TotalWrapper } from './TotalWrapper'

const InvoicePreviewTable = () => {
  interface DataType {
    key: React.Key
    taskDesc: string
    hours: string
    rate: string
    amount: string
  }

  const invoiceColumns: ColumnsType<DataType> = [
    {
      title: 'TASK DESCRIPTION',
      dataIndex: 'taskDesc',
      key: 'task-desc'
    },
    {
      title: 'HOURS',
      dataIndex: 'hours',
      key: 'hours'
    },
    {
      title: 'RATE ',
      dataIndex: 'rate',
      key: 'rate'
    },
    {
      title: 'AMOUNT',
      dataIndex: 'amount',
      key: 'amount'
    }
  ]

  const invoiceData: DataType[] = [
    {
      key: '1',
      taskDesc: 'Website redesign',
      hours: '60',
      rate: '10 USD',
      amount: '900,00 USD'
    },
    {
      key: '2',
      taskDesc: 'Website redesign',
      hours: '20',
      rate: '12 USD',
      amount: '240,00 USD'
    }
  ]
  return (
    <>
      <Table
        columns={invoiceColumns}
        dataSource={invoiceData}
        pagination={false}
        scroll={{ x: true }}
      />
      <TotalWrapper>
        <div className="cell">
          <p className="title">SUBTOTAL</p>
          <p className="amount">1140,00 USD</p>
        </div>
        <div className="cell">
          <p className="title">DISCOUNT 5%</p>
          <p className="amount">57,00 USD</p>
        </div>
        <div className="cell">
          <p className="title total">TOTAL</p>
          <p className="amount total-amount">1083,00 USD</p>
        </div>
      </TotalWrapper>
    </>
  )
}

export default InvoicePreviewTable
