import {
  breakpoints,
  fontSizes,
  fontWeights,
  textAlignValues
} from '../../config/variable'
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

export function Font() {
  return (
    <>
      <h1 className="text-primary-500 ta-center py-16">Font Utilities</h1>
      <p className="fw-600 mb-12 py-8 px-16 bg-neutral-50">Usage</p>
      <div className="d-flex fd-column mb-24 px-16 g-8">
        <div>
          <div>
            To use these classes write
            <CodeLine> utility type </CodeLine>
            followed by
            <CodeLine> value </CodeLine>
            separated by <CodeLine>-</CodeLine>
          </div>
          <div>
            For example,
            <CodeLine> fz-16 </CodeLine>
            applies
            <CodeLine> font-size: 16px;</CodeLine>
          </div>
          <div>
            For example,
            <CodeLine> fw-500 </CodeLine>
            applies
            <CodeLine> font-weight: 500;</CodeLine>
          </div>
          <div>
            For example,
            <CodeLine> ta-center </CodeLine>
            applies
            <CodeLine> text-align: center;</CodeLine>
          </div>
        </div>
        <hr className="bg-neutral-300" />
        <div>
          <div>
            To use these classes for a certain breakpoint write
            <CodeLine> utility </CodeLine>
            followed by
            <CodeLine> breakpoint </CodeLine>
            followed by
            <CodeLine> value </CodeLine>
            separated by <CodeLine>-</CodeLine>
          </div>
          <div>
            For example,
            <CodeLine> fz-sm-16 </CodeLine>
            applies
            <CodeLine>
              <pre className="fz-16">
                @media {breakpoints.sm}{' '}
                {`{
  font-size: 16px;
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
        <ValueWrapper>fz: font-size</ValueWrapper>
        <ValueWrapper>fw: font-weight</ValueWrapper>
        <ValueWrapper>ta: text-align</ValueWrapper>
      </div>
      <p className="fw-600 mb-12 py-8 px-16 bg-neutral-50">Available Values</p>
      <div className="d-flex flex-wrap ai-center mb-12 px-16 g-8">
        <p className="fw-600">Font Sizes: </p>
        {fontSizes.map((fontSize) => {
          return <ValueWrapper key={fontSize}>{fontSize}</ValueWrapper>
        })}
      </div>
      <div className="d-flex flex-wrap ai-center mb-12 px-16 g-8">
        <p className="fw-600">Font Weights: </p>
        {fontWeights.map((fontWeight) => {
          return <ValueWrapper key={fontWeight}>{fontWeight}</ValueWrapper>
        })}
      </div>
      <div className="d-flex flex-wrap ai-center mb-24 px-16 g-8">
        <p className="fw-600">Text Alignments: </p>
        {textAlignValues.map((alignment) => {
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

Font.story = {}
