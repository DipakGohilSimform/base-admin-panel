import { Col, Row } from 'antd'
import * as Icons from '.'

export default {
  title: 'Theme/SVG Icons'
}

export function Default() {
  return (
    <Row gutter={[16, 16]}>
      {Object.entries(Icons).map((item) => {
        const [iconName, Icon] = item
        return (
          <Col span={4} key={iconName}>
            <div className="d-flex fd-column gap-8 ai-center border border-neutral-300 radius-8 p-16">
              <Icon className="w-32 h-32" />
              <p className="fz-16 mt-12">{iconName}</p>
            </div>
          </Col>
        )
      })}
    </Row>
  )
}

Default.story = {
  name: 'SVGIcon'
}
