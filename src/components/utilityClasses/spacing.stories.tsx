import { breakpoints, spacingValues } from '../../config/variable'
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

export function Spacing() {
  return (
    <>
      <h1 className="text-primary-500 ta-center py-16">Spacing Utilities</h1>
      <p className="fw-600 mb-12 py-8 px-16 bg-neutral-50">Usage</p>
      <div className="d-flex fd-column mb-24 px-16 g-8">
        <div>
          <div>
            To use these classes write
            <CodeLine> space-type </CodeLine>
            followed by
            <CodeLine> value </CodeLine>
            separated by <CodeLine>-</CodeLine>
          </div>
          <div>
            For example,
            <CodeLine> mb-16 </CodeLine>
            applies
            <CodeLine> margin-block-end: 16px;</CodeLine>
          </div>
        </div>
        <hr className="bg-neutral-300" />
        <div>
          <div>
            To use these classes for a certain breakpoint write
            <CodeLine> space-type </CodeLine>
            followed by
            <CodeLine> breakpoint </CodeLine>
            followed by
            <CodeLine> value </CodeLine>
            separated by <CodeLine>-</CodeLine>
          </div>
          <div>
            For example,
            <CodeLine> mb-sm-16 </CodeLine>
            applies
            <CodeLine>
              <pre className="fz-16">
                @media {breakpoints.sm}{' '}
                {`{
  margin-block-end: 16px;
}`}
              </pre>
            </CodeLine>
          </div>
        </div>
        <hr className="bg-neutral-300" />
        <div>
          <div>
            For margins we also have a speacial value
            <CodeLine> auto </CodeLine>
            To use it write
            <CodeLine> margin-direction </CodeLine>
            followed by
            <CodeLine> value </CodeLine>
            separated by <CodeLine>-</CodeLine>
          </div>
          <div>
            For example,
            <CodeLine> mb-auto </CodeLine>
            applies
            <CodeLine> margin-block-end: auto;</CodeLine>
          </div>
        </div>
      </div>
      <p className="fw-600 mb-12 py-8 px-16 bg-neutral-50">
        Available Classes & Generated Properties
      </p>
      <div className="d-flex flex-wrap ai-center mb-24 px-16 g-8">
        <ValueWrapper>m: margin</ValueWrapper>
        <ValueWrapper>mx: margin-inline</ValueWrapper>
        <ValueWrapper>my: margin-block</ValueWrapper>
        <ValueWrapper>mt: margin-block-start</ValueWrapper>
        <ValueWrapper>mr: margin-inline-end</ValueWrapper>
        <ValueWrapper>mb: margin-block-end</ValueWrapper>
        <ValueWrapper>ml: margin-inline-start</ValueWrapper>
        <ValueWrapper>p: padding</ValueWrapper>
        <ValueWrapper>px: padding-inline</ValueWrapper>
        <ValueWrapper>py: padding-block</ValueWrapper>
        <ValueWrapper>pt: padding-block-start</ValueWrapper>
        <ValueWrapper>pr: padding-inline-end</ValueWrapper>
        <ValueWrapper>pb: padding-block-end</ValueWrapper>
        <ValueWrapper>pl: padding-inline-start</ValueWrapper>
        <ValueWrapper>g: gap</ValueWrapper>
        <ValueWrapper>gx: column-gap</ValueWrapper>
        <ValueWrapper>gy: row-gap</ValueWrapper>
      </div>
      <p className="fw-600 mb-12 py-8 px-16 bg-neutral-50">Available Values</p>
      <div className="d-flex flex-wrap ai-center mb-24 px-16 g-8">
        {spacingValues.map((space) => {
          return <ValueWrapper key={space}>{space}</ValueWrapper>
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

Spacing.story = {}
