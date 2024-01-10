import { breakpoints, displayValues } from '../../config/variable'
import { CodeLine, ValueWrapper } from './utilityClasses.style'

const breakpointValues = Object.entries(breakpoints)

export default {
  title: 'Theme/Utility Classes',
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  }
}

export function Display() {
  return (
    <>
      <h1 className="text-primary-500 ta-center py-16">Display Utilities</h1>
      <p className="fw-600 mb-12 py-8 px-16 bg-neutral-50">Usage</p>
      <div className="d-flex fd-column mb-24 px-16 g-8">
        <div>
          <div>
            To use these classes write
            <CodeLine> d </CodeLine>
            followed by
            <CodeLine> value </CodeLine>
            separated by <CodeLine>-</CodeLine>
          </div>
          <div>
            For example,
            <CodeLine> d-block </CodeLine>
            applies
            <CodeLine> display: block;</CodeLine>
          </div>
        </div>
        <hr className="bg-neutral-300" />
        <div>
          <div>
            To use these classes for a certain breakpoint write
            <CodeLine> d </CodeLine>
            followed by
            <CodeLine> breakpoint </CodeLine>
            followed by
            <CodeLine> value </CodeLine>
            separated by <CodeLine>-</CodeLine>
          </div>
          <div>
            For example,
            <CodeLine> d-sm-block </CodeLine>
            applies
            <CodeLine>
              <pre className="fz-16">
                @media {breakpoints.sm}{' '}
                {`{
  display: block;
}`}
              </pre>
            </CodeLine>
          </div>
        </div>
      </div>
      <p className="fw-600 mb-12 py-8 px-16 bg-neutral-50">
        Available Classes & Generated Properties
      </p>
      <div className="d-flex flex-wrap ai-center mb-24 px-16 g-8">
        <ValueWrapper>d: display</ValueWrapper>
      </div>
      <p className="fw-600 mb-12 py-8 px-16 bg-neutral-50">Available Values</p>
      <div className="d-flex flex-wrap ai-center mb-12 px-16 g-8">
        {displayValues.map((display) => {
          return <ValueWrapper key={display}>{display}</ValueWrapper>
        })}
      </div>
      <p className="fw-600 mb-12 py-8 px-16 bg-neutral-50">
        Available Breakpoints
      </p>
      <div className="d-flex flex-wrap ai-center pb-24 px-16 g-8">
        {breakpointValues.map(([breakpointName, breakpointValue]) => {
          return (
            <ValueWrapper key={breakpointName}>
              {breakpointName}: {breakpointValue}
            </ValueWrapper>
          )
        })}
      </div>
    </>
  )
}

Display.story = {}
