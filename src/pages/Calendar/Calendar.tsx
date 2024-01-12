import React, { useState } from 'react'
import { CalendarWrapper } from './CalenderWrapper'
import { Button } from '../../components/ant'
import type { TabsProps } from 'antd'
import Plus from '../../components/icons/Plus'
import { Calendar as AntCalendar, Divider, Input, Modal } from 'antd'
import DoubleArrow from '../../components/icons/DoubleArrow'
import Images from '../../config/images'

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
            className="create-event-modal"
          >
            <div className="modal-heading"></div>
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
