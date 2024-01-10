import { themes } from '../../config/variable'
import { CodeLine, ValueWrapper } from './utilityClasses.style'

const themeValues = Object.entries(themes.default)

export default {
  title: 'Theme/Utility Classes',
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  }
}

export function Color() {
  return (
    <>
      <h1 className="text-primary-500 ta-center py-16">Color Utilities</h1>
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
            <CodeLine> text-primary-500 </CodeLine>
            applies
            <CodeLine> color: var(--primary-500);</CodeLine>
          </div>
          <div>
            <CodeLine> bg-primary-500 </CodeLine>
            applies
            <CodeLine> background-color: var(--primary-500);</CodeLine>
          </div>
          <div>
            <CodeLine> border-primary-500 </CodeLine>
            applies
            <CodeLine> border-color: var(--primary-500);</CodeLine>
          </div>
          <div>
            <CodeLine> primary-500 </CodeLine>
            applies
            <CodeLine> --color: var(--primary-500);</CodeLine>
          </div>
        </div>
      </div>
      <p className="fw-600 mb-12 py-8 px-16 bg-neutral-50">
        Available Classes & Generated Properties
      </p>
      <div className="d-flex flex-wrap ai-center mb-24 px-16 g-8">
        <ValueWrapper>text: color</ValueWrapper>
        <ValueWrapper>bg: background-color</ValueWrapper>
        <ValueWrapper>border: border-color</ValueWrapper>
        <ValueWrapper>color: --color</ValueWrapper>
      </div>
      <p className="fw-600 mb-12 py-8 px-16 bg-neutral-50">Available Values</p>
      <div className="d-flex flex-wrap ai-center pb-24 px-16 g-8">
        {themeValues.map(([color]) => {
          return (
            <ValueWrapper key={color}>
              {color}{' '}
              <span className={`d-inline-block w-12 h-12 bg-${color}`} />
            </ValueWrapper>
          )
        })}
      </div>
    </>
  )
}

Color.story = {}
