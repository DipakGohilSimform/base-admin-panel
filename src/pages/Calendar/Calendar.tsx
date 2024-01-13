import { useState } from 'react'
import { CalendarWrapper } from './CalenderWrapper'
import { Button } from '../../components/ant'
import Plus from '../../components/icons/Plus'
import { Calendar as AntCalendar, Input, Radio } from 'antd'
import { EventModal as Modal } from './CalenderWrapper'
import DoubleArrow from '../../components/icons/DoubleArrow'
import Images from '../../config/images'
import Clock from '../../components/icons/Clock'
import EventCalendar from '../../components/icons/EventCalendar'
import Location from '../../components/icons/Location'
import Users from '../../components/icons/Users'

const Calendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const modalStyles = {
    header: {},
    body: {
      boxShadow: 'inset 0 0 5px #999',
      borderRadius: 5
    },
    mask: {},
    footer: {},
    content: {
      boxShadow: '0 0 30px #999'
    }
  }

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', title: 'Orange' }
  ]
  return (
    <CalendarWrapper>
      <div className="calendar-header">
        <h1 className="title">Calendar</h1>
        <div className="cta-wrapper">
          <Button type="default">Day</Button>
          <Button type="default">Week</Button>
          <Button type="default">Month</Button>
          <Button type="default">Year</Button>
        </div>
      </div>
      <div className="schedule-wrapper">
        <div className="schedule-card">
          <Button type="primary" icon={<Plus />} block onClick={showModal}>
            Create Schedule
          </Button>
          <AntCalendar
            headerRender={() => (
              <div className="schedule-calendar-header d-flex jc-space-between">
                <p>December 2, 2021</p>
                <DoubleArrow />
              </div>
            )}
            fullscreen={false}
          />
          <div className="people-wrapper">
            <div className="title">People</div>
            <Input placeholder="Search for People" />
            <div className="people-details">
              {Array.from({ length: 3 }).map((index: any) => (
                <div key={index} className="details">
                  <div className="person-img">
                    <img src={Images.Eddie} alt="avtar" />
                  </div>
                  <div className="about">
                    <p className="name">Eddie Lobanovskiy</p>
                    <p className="email">laboanovskiy@gmail.com</p>
                  </div>
                </div>
              ))}
            </div>
            <Button>My Schedule</Button>
          </div>
          <Modal
            title="Create an Event"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Save"
            cancelText="Close"
            className="create-event-modal"
            styles={modalStyles}
          >
            <Radio.Group options={options} optionType="button" />
            <Input placeholder="Add title" />
            <div className="wrapper">
              <div className="icon">
                <Clock />
              </div>
              <div className="time-details">
                <p className="time">Thursday. December 5 12:00pm - 1:00pm</p>
                <p className="time-zone">Time zone - Does not repeat</p>
                <p className="find-time">Find a time</p>
              </div>
            </div>
            <div className="btn-wrapper">
              <Button type="primary" icon={<Users />}>
                Add People
              </Button>
              <Button type="default" icon={<Location />}>
                Add location
              </Button>
            </div>
            <div className="wrapper">
              <div className="icon">
                <EventCalendar />
              </div>
              <div className="time-details">
                <p className="time">John Deo</p>
                <p className="time-zone">
                  Busy - Default visibllity - notity 30 minutes before
                </p>
              </div>
            </div>
          </Modal>
        </div>
        <div className="calendar">
          <AntCalendar
            headerRender={() => (
              <div className="schedule-calendar-header d-flex jc-space-between">
                <p>December 2, 2021</p>
                <DoubleArrow />
              </div>
            )}
          />
        </div>
      </div>
    </CalendarWrapper>
  )
}

export default Calendar
