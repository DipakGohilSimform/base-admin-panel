import React from 'react'
import { Input, Tag } from 'antd'
import InvoiceListWrapper from './InvoiceListWrapper'
import Search from '../../components/icons/Search'
import Plus from '../../components/icons/Plus'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import Delete from '../../components/icons/Delete'
import MenuIcon from '../../components/icons/Menu'
import Star from '../../components/icons/Star'
import Images from '../../config/images'
import Email from '../../components/icons/Email'
import Calender from '../../components/icons/Calender'
import { Button } from '../../components/ant'

const InvoiceList = () => {
  interface DataType {
    key: React.Key
    invoiceId: string
    name: string
    email: string
    date: string
    status: string
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'invoiceId',
      dataIndex: 'invoiceId',
      sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
      title: 'name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (name) => (
        <div className="d-flex ai-center g-14">
          <div className="profile">
            <img src={Images.Robert} alt="profile" />
          </div>
          <p>{name}</p>
        </div>
      )
    },
    {
      title: 'email',
      dataIndex: 'email',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (email) => (
        <div className="d-flex ai-center g-14">
          <Email />
          <p>{email}</p>
        </div>
      )
    },
    {
      title: 'date',
      dataIndex: 'date',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (date) => (
        <div className="d-flex ai-center g-14">
          <Calender />
          <p>{date}</p>
        </div>
      )
    },
    {
      title: 'status',
      dataIndex: 'status',
      width: 250,
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (status) => <Tag color="green">{status}</Tag>
    },
    {
      title: '',
      dataIndex: 'star',
      render: () => <Star />
    },
    {
      title: <Delete />,
      dataIndex: 'delete',
      render: () => <MenuIcon />
    }
  ]

  const data: DataType[] = [
    {
      key: '1',
      invoiceId: '#876364',
      name: 'Arrora gaur',
      email: 'arroragaur@gmail.com',
      date: '12 Dec, 2020',
      status: 'Complete'
    },
    {
      key: '2',
      invoiceId: '#876364',
      name: 'Arrora gaur',
      email: 'arroragaur@gmail.com',
      date: '12 Dec, 2020',
      status: 'Complete'
    },
    {
      key: '3',
      invoiceId: '#876364',
      name: 'Arrora gaur',
      email: 'arroragaur@gmail.com',
      date: '12 Dec, 2020',
      status: 'Complete'
    },
    {
      key: '4',
      invoiceId: '#876364',
      name: 'Arrora gaur',
      email: 'arroragaur@gmail.com',
      date: '12 Dec, 2020',
      status: 'Complete'
    },
    {
      key: '5',
      invoiceId: '#876364',
      name: 'Arrora gaur',
      email: 'arroragaur@gmail.com',
      date: '12 Dec, 2020',
      status: 'Complete'
    },
    {
      key: '6',
      invoiceId: '#876364',
      name: 'Arrora gaur',
      email: 'arroragaur@gmail.com',
      date: '12 Dec, 2020',
      status: 'Complete'
    },
    {
      key: '7',
      invoiceId: '#876364',
      name: 'Arrora gaur',
      email: 'arroragaur@gmail.com',
      date: '12 Dec, 2020',
      status: 'Complete'
    },
    {
      key: '8',
      invoiceId: '#876364',
      name: 'Arrora gaur',
      email: 'arroragaur@gmail.com',
      date: '12 Dec, 2020',
      status: 'Complete'
    },
    {
      key: '9',
      invoiceId: '#876364',
      name: 'Arrora gaur',
      email: 'arroragaur@gmail.com',
      date: '12 Dec, 2020',
      status: 'Complete'
    },
    {
      key: '10',
      invoiceId: '#876364',
      name: 'Arrora gaur',
      email: 'arroragaur@gmail.com',
      date: '12 Dec, 2020',
      status: 'Complete'
    }
  ]
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      )
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User',
      name: record.name
    })
  }
  return (
    <InvoiceListWrapper>
      <div className="invoice-list-header">
        <h1 className="page-title">Invoice List</h1>
        <div className="invoice-cta">
          <Input placeholder="Search" suffix={<Search />} />
          <Button type="primary" size="small" icon={<Plus />}>
            Add New
          </Button>
        </div>
      </div>
      <div className="invoice-table">
        <Table
          pagination={false}
          rowSelection={{
            ...rowSelection
          }}
          columns={columns}
          dataSource={data}
          scroll={{ x: 700 }}
        />
      </div>
    </InvoiceListWrapper>
  )
}

export default InvoiceList
