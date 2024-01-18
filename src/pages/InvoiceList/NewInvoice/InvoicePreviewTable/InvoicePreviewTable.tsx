import Table, { ColumnsType } from 'antd/es/table'
import React from 'react'

function InvoicePreviewTable() {
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
    },
    {
      key: '3',
      taskDesc: '',
      hours: '',
      rate: 'SUBTOTAL',
      amount: '1140,00 USD'
    },
    {
      key: '4',
      taskDesc: '',
      hours: '',
      rate: 'DISCOUNT 5%',
      amount: '57,00 USD'
    },
    {
      key: '5',
      taskDesc: '',
      hours: '',
      rate: 'TOTAL',
      amount: '1083,00 USD'
    }
  ]
  return (
    <Table
      columns={invoiceColumns}
      dataSource={invoiceData}
      pagination={false}
      scroll={{ x: true }}
    />
  )
}

export default InvoicePreviewTable
