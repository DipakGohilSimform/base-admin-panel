import { createGlobalStyle } from 'styled-components'
import { colorVariables, utilityClasses } from './utilityClasses'

const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

${colorVariables}

html {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  min-height: 100%;
  line-height: 1.5;
  font-family: 'Manrope', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  text-rendering: optimizeSpeed;
  background-color: var(--neutral-0);
  color: var(--neutral-950);
}

ul[role="list"],
ol[role="list"] {
  list-style: none;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
  height: auto;
  font-style: italic;
}

input,
button,
textarea,
select {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

a:visited {
  color: inherit;
}

code,
kbd,
samp {
  font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;
}

hr {
  all: unset;
  display: block;
  height: 1px;
  width: 100%;
  background: currentColor;
}

.visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.anticon {
  svg {
    width: inherit;
    height: inherit;
  }
}

// ==== ==== ==== Utility classes start here
.underline {
  text-decoration: underline;
}

.border {
  border-width: 1px;
  border-style: solid;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-nowrap {
  flex-wrap: nowrap;
}

.flex-shrink {
  flex-shrink: 1;
}

.flex-noshrink {
  flex-shrink: 0;
}

.flex-grow {
  flex-grow: 1;
}

.flex-nogrow {
  flex-grow: 0;
}

.space-nowrap {
  white-space: nowrap;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.w-full {
  width: 100%;
}

.pointer {
  cursor: pointer;
}

${Object.values(utilityClasses)
  .join('')
  .replaceAll(' ', '')
  .replaceAll('\n', '')}

// Remove these styles before starting your project
#root {
  height: 100vh;
  padding-top: 80px;
  display: grid;
  place-content: center;
  place-items: center;
  gap: 1rem;
}
`

export default GlobalStyle
