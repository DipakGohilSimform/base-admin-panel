import { NewInvoiceWrapper } from './NewInvoiceWrapper'
import { FaDownload } from 'react-icons/fa'
import { FaPrint } from 'react-icons/fa'
import Image from '../../../components/icons/Image'
import { DatePicker, Input, Table } from 'antd'
import { Button } from '../../../components/ant'
import Plus from '../../../components/icons/Plus'
import { ColumnsType } from 'antd/es/table'
import { MdDelete } from 'react-icons/md'
import Images from '../../../config/images'
import InvoicePreviewTable from './InvoicePreviewTable/InvoicePreviewTable'
import Location from '../../../components/icons/Location'
import Calendar from '../../../components/icons/Calendar'

// invoice-table-data
const NewInvoice = () => {
  interface DataType {
    key: React.Key
    productNo: string
    rate: string
    qty: string
    amount: string
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Product Name',
      dataIndex: 'productNo',
      key: 'product-no'
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
      key: 'rate'
    },
    {
      title: 'QTY ',
      dataIndex: 'qty',
      key: 'qty'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text) => <p className="amount">{text}</p>
    },
    {
      title: '',
      dataIndex: 'delete',
      render: () => (
        <div className="delete">
          <MdDelete />
        </div>
      )
    }
  ]

  const data: DataType[] = [
    {
      key: '1',
      productNo: 'ipod 2021',
      rate: '$1000',
      qty: '10 Pcs',
      amount: '$10,000'
    },
    {
      key: '2',
      productNo: 'Apple Mackbook',
      rate: '$1500',
      qty: '10 Pcs',
      amount: '$150,000'
    },
    {
      key: '3',
      productNo: 'i phone 12',
      rate: '$885',
      qty: '10 Pcs',
      amount: '$8850'
    }
  ]

  return (
    <NewInvoiceWrapper>
      <div className="invoice-form wrapper">
        <div className="header">
          <h2 className="title">Create New Invoice</h2>
        </div>
        <div className="img">
          <Image />
        </div>
        <form action="" className="new-invoice-form">
          <div className="half-input">
            <div className="input-wrapper">
              <label className="input-title" htmlFor="invoice-id">
                Invoice Id
              </label>
              <Input placeholder="#876370" id="invoice-id" />
            </div>
            <div className="input-wrapper">
              <label className="input-title" htmlFor="date">
                Date
              </label>
              <DatePicker id="date" suffixIcon={<Calendar />} />
            </div>
          </div>
          <div className="input-wrapper full-input">
            <label className="input-title" htmlFor="name">
              Name
            </label>
            <Input placeholder="Alison G." id="name" />
          </div>
          <div className="half-input">
            <div className="input-wrapper">
              <label className="input-title" htmlFor="Email">
                Email
              </label>
              <Input placeholder="Example@gmail.com" id="Email" />
            </div>
            <div className="input-wrapper">
              <label className="input-title" htmlFor="Address">
                Address
              </label>
              <Input
                placeholder="Street"
                id="Address"
                suffix={<Location />}
                className="address-field"
              />
            </div>
          </div>
          <div className="desc">
            <p className="input-title">Product Description</p>
            <Button type="primary">
              <Plus />
            </Button>
          </div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ x: true }}
          />
          <div className="btn-wrapper">
            <Button type="default" block>
              Send Invoice
            </Button>
            <Button type="primary" block>
              Create Invoice
            </Button>
          </div>
        </form>
      </div>
      <div className="invoice-preview wrapper">
        <div className="header">
          <h2 className="title">Preview</h2>
          <div className="cta">
            <FaDownload />
            <FaPrint />
          </div>
        </div>
        <div className="invoice-content">
          <div className="invoice-header">
            <div className="invoice-header-left">
              <img
                src={Images.JLogo}
                alt="invoice-logo"
                className="invoice-logo"
              />
              <h4 className="title-sm">RECIPIENT</h4>
              <p className="address light-text">
                JOHN SMITH 4304 Liberty Avenue 92680 Tustin, CA VAT no.:
                12345678
              </p>
              <p className="invoice-email light-text">
                <span>@</span>company.mail@gmail.com
              </p>
              <p className="invoice-m light-text">
                <span>m</span>+386 714 505 8385
              </p>
            </div>
            <div className="invoice-header-right">
              <div className="contact-wrapper">
                <p className="invoice-email light-text">
                  <span>@</span>your.mail@gmail.com
                </p>
                <p className="invoice-m light-text">
                  <span>m</span>+386 989 271 3115
                </p>
              </div>
              <h3 className="title">Invoice</h3>
              <div className="invoice-number">
                <p className="title-sm">invoice no.</p>
                <p className="light-text">001/2021</p>
              </div>
              <div className="invoice-date">
                <p className="title-sm">Invoice date</p>
                <p className="light-text">January 1, 2021</p>
              </div>
            </div>
          </div>
          <div className="service-data">
            <InvoicePreviewTable />
            <div className="desc">
              <p className="light-text">
                Transfer the amount to the business account below. Please
                include invoice number on your check.
              </p>
              <div className="account-data">
                <p className="light-text">
                  BANK: <span>FTSBUS33</span>
                </p>
                <p className="light-text">
                  IBAN: <span>GB82-1111-2222-3333</span>
                </p>
              </div>
            </div>
          </div>
          <div className="invoice-note">
            <p className="title-sm">NOTES</p>
            <p className="light-text mb-10 ">
              All amounts are in dollars. Please make the payment within 15 days
              from the issue of date of this invoice. Tax is not charged on the
              basis of paragraph 1 of Article 94 of the Value Added Tax Act (I
              am not liable for VAT).
            </p>
            <p className="light-text">
              Thank you for you confidence in my work.
            </p>
            <p className="light-text">Signiture</p>
          </div>
          <div className="invoice-footer">
            <div className="footer-content">
              <p className="light-text">
                YOUR COMPANY 1331 Hart Ridge Road, 48436 Gaines, MI
              </p>
            </div>
            <div className="contact-wrapper footer-content">
              <p className="invoice-email light-text">
                <span>@</span>your.mail@gmail.com
              </p>
              <p className="invoice-m light-text">
                <span>m</span>+386 989 271 3115
              </p>
            </div>
            <div className="registration footer-content">
              <p className="light-text">
                The company is registered in the business register under no.
                87650000
              </p>
            </div>
          </div>
        </div>
      </div>
    </NewInvoiceWrapper>
  )
}

export default NewInvoice
