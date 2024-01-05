import { breakpoints, alignItemsValues } from '../../config/variable'
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

export function AlignItems() {
  return (
    <>
      <h1 className="text-primary-500 ta-center py-16">
        Align Items Utilities
      </h1>
      <p className="fw-600 mb-12 py-8 px-16 bg-neutral-50">Usage</p>
      <div className="d-flex fd-column mb-24 px-16 g-8">
        <div>
          <div>
            To use these classes write
            <CodeLine> ai </CodeLine>
            followed by
            <CodeLine> value </CodeLine>
            separated by <CodeLine>-</CodeLine>
          </div>
          <div>
            For example,
            <CodeLine> ai-center </CodeLine>
            applies
            <CodeLine> align-items: center;</CodeLine>
          </div>
        </div>
        <hr className="bg-neutral-300" />
        <div>
          <div>
            To use these classes for a certain breakpoint write
            <CodeLine> ai </CodeLine>
            followed by
            <CodeLine> breakpoint </CodeLine>
            followed by
            <CodeLine> value </CodeLine>
            separated by <CodeLine>-</CodeLine>
          </div>
          <div>
            For example,
            <CodeLine> ai-sm-center </CodeLine>
            applies
            <CodeLine>
              <pre className="fz-16">
                @media {breakpoints.sm}{' '}
                {`{
  align-items: center;
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
        <ValueWrapper>ai: align-items</ValueWrapper>
      </div>
      <p className="fw-600 mb-12 py-8 px-16 bg-neutral-50">Available Values</p>
      <div className="d-flex flex-wrap ai-center mb-12 px-16 g-8">
        {alignItemsValues.map((alignment) => {
          return <ValueWrapper key={alignment}>{alignment}</ValueWrapper>
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

AlignItems.story = {}
