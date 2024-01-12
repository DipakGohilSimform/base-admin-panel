import { Divider, Rate, Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import MenuIcon from '../../components/icons/Menu'
import Images from '../../config/images'
import { DashboardStyle } from './Dashboard'
import { Button, DatePicker, DatePickerProps, Popover } from 'antd'
import { ReactNode } from 'react'
import Arrow from '../../components/icons/Arrow'

const AdminDashboard = () => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
  }
  const CardData = [
    {
      icon: <img src={Images.Heart} alt="hear" />,
      number: '178+',
      desc: 'Save Products'
    },
    {
      icon: <img src={Images.Game} alt="game" />,
      number: '20+',
      desc: 'Stock Products'
    },
    {
      icon: <img src={Images.Bag} alt="bag" />,
      number: '190+',
      desc: 'Sales Products'
    },
    {
      icon: <img src={Images.Job} alt="job" />,
      number: '12+',
      desc: 'Job Application'
    }
  ]

  const text = <span>Title</span>

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )

  interface DataType {
    key: React.Key
    trackingNo: string
    productName: ReactNode
    price: string
    totalOrder: number
    totalAmount: string
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Tracking no',
      dataIndex: 'trackingNo',
      key: 'tracking-no'
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'product-name'
    },
    {
      title: 'Price ',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'Total Order  ',
      dataIndex: 'totalOrder',
      key: 'total-order',
      render: (text) => (
        <div
          className="total px-20 py-8 radius-12 bg-cyan-50 ta-center"
          style={{ width: '65px' }}
        >
          {text}
        </div>
      )
    },
    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
      key: 'total-amount'
    }
  ]

  const data: DataType[] = [
    {
      key: '1',
      trackingNo: '#876364',
      productName: (
        <div className="d-flex g-10 ai-center">
          <img src={Images.Lens} alt="lens" />
          <p>Camera Lens</p>
        </div>
      ),
      price: '$178',
      totalOrder: 325,
      totalAmount: '$1,46,660'
    },
    {
      key: '2',
      trackingNo: '#876364',
      productName: (
        <div className="d-flex g-10 ai-center">
          <img src={Images.Dress} alt="dress" />
          <p>Black Sleep Dress</p>
        </div>
      ),
      price: '$14',
      totalOrder: 32,
      totalAmount: '$1,46,660'
    },
    {
      key: '3',
      trackingNo: '#876364',
      productName: (
        <div className="d-flex g-10 ai-center">
          <img src={Images.Oil} alt="oil" />
          <p>Argan Oil</p>
        </div>
      ),
      price: '$21',
      totalOrder: 78,
      totalAmount: '$1,46,660'
    },
    {
      key: '4',
      trackingNo: '#876364',
      productName: (
        <div className="d-flex g-10 ai-center">
          <img src={Images.Perfume} alt="perfume" />
          <p>EAU DE Parfum</p>
        </div>
      ),
      price: '$32',
      totalOrder: 98,
      totalAmount: '$1,46,660'
    }
  ]

  return (
    <DashboardStyle>
      <div className="dashboard-header">
        <h1 className="page-title">Dashboard</h1>
        <div className="calender">
          <DatePicker onChange={onChange} />
          <DatePicker onChange={onChange} />
        </div>
      </div>
      <div className="analytics-cards-wrapper">
        {CardData.map((card, index) => (
          <div className="analytic-card" key={index}>
            <div className="card-icon">{card.icon}</div>
            <div className="card-content">
              <h3 className="number">{card.number}</h3>
              <p className="desc">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mid-wrapper">
        <div className="dashboard-reports">
          <img src={Images.Reports} alt="reports" />
        </div>
        <div className="dashboard-analytics">
          <img src={Images.Analytics} alt="analytics" />
        </div>
      </div>
      <div className="bottom-wrapper">
        <div className="recent-orders">
          <div className="heading">
            <h3 className="title">Recent Orders</h3>
            <Popover
              placement="bottomLeft"
              title={text}
              content={content}
              trigger="click"
            >
              <Button>
                <MenuIcon />
              </Button>
            </Popover>
          </div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ x: true }}
          />
        </div>
        <div className="top-products">
          <div className="heading">
            <h3 className="title">Top Selling Products</h3>
            <Popover
              placement="bottomLeft"
              title={text}
              content={content}
              trigger="click"
            >
              <Button>
                <MenuIcon />
              </Button>
            </Popover>
          </div>
          <div className="products-wrapper">
            <div className="product-card">
              <div className="product-image">
                <img src={Images.Shoes} alt="shoes" />
              </div>
              <div className="product-description">
                <h3 className="product-name">NIKE Shoes Black Pattern</h3>
                <Rate disabled defaultValue={4} />
                <p className="prize">$87</p>
              </div>
            </div>
            <Divider />
            <div className="product-card">
              <div className="product-image">
                <img src={Images.Iphone} alt="shoes" />
              </div>
              <div className="product-description">
                <h3 className="product-name">iPhone 12</h3>
                <Rate disabled defaultValue={4} />
                <p className="prize">$987</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardStyle>
  )
}

export default AdminDashboard
