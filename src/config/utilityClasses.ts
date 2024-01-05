/**
 * These utility classes are generated based on
 * the varialbes in the variables.ts file.
 * You can edit the variables in variables.ts to
 * update the classes.
 * You can also remove whole categories of utility
 * classes if you choose to do so.
 */
import {
  breakpoints,
  spacingValues,
  fontSizes,
  fontWeights,
  displayValues,
  alignItemsValues,
  justifyContentValues,
  radiusValues,
  themes,
  sizeValues,
  flexDirectionValues,
  textAlignValues
} from './variable'

const breakpointValues = Object.entries(breakpoints)

const themeValues = Object.entries(themes)

/* ==== ==== ==== Color Variables ==== ==== ==== */
/* Color varibles are not utility classes these are
  inserted in the :root element in global styles */
export const colorVariables = themeValues
  .map(
    ([theme, values]) => `
:root[data-theme='${theme}'] {
${Object.entries(values)
  .map(
    ([color, value]) => `
  --${color}-rgb: ${value};
  --${color}: rgb(${value});`
  )
  .join('')}
}`
  )
  .join('')

/* ==== ==== ==== Color Utility Classes ==== ==== ==== */
const colorUtilities = Object.entries(themes.default)
  .map(
    ([color]) => `
.text-${color} {
  color: var(--${color});
}
.bg-${color} {
  background-color: var(--${color});
}
.border-${color} {
  border-color: var(--${color});
}
.${color} {
  --color: var(--${color});
}`
  )
  .join('')

/* ==== ==== ==== Spacing Utility Classes ==== ==== ==== */
const spacingUtilities = spacingValues
  .map(
    (space) => `
.p-${space} {
  padding: ${space}px;
}
.px-${space} {
  padding-inline: ${space}px;
}
.py-${space} {
  padding-block: ${space}px;
}
.pl-${space} {
  padding-inline-start: ${space}px;
}
.pr-${space} {
  padding-inline-end: ${space}px;
}
.pt-${space} {
  padding-block-start: ${space}px;
}
.pb-${space} {
  padding-block-end: ${space}px;
}
.m-${space} {
  margin: ${space}px;
}
.mx-${space} {
  margin-inline: ${space}px;
}
.my-${space} {
  margin-block: ${space}px;
}
.ml-${space} {
  margin-inline-start: ${space}px;
}
.mr-${space} {
  margin-inline-end: ${space}px;
}
.mt-${space} {
  margin-block-start: ${space}px;
}
.mb-${space} {
  margin-block-end: ${space}px;
}
.g-${space} {
  gap: ${space}px;
}
.gx-${space} {
  column-gap: ${space}px;
}
.gy-${space} {
  row-gap: ${space}px;
}`
  )
  .join('')

const responsiveSpacing = breakpointValues
  .map(
    ([breakpointName, breakpointValue]) => `
@media ${breakpointValue} {
  ${spacingValues
    .map(
      (space) => `
  .p-${breakpointName}-${space} {
    padding: ${space}px;
  }
  .px-${breakpointName}-${space} {
    padding-inline: ${space}px;
  }
  .py-${breakpointName}-${space} {
    padding-block: ${space}px;
  }
  .pl-${breakpointName}-${space} {
    padding-inline-start: ${space}px;
  }
  .pr-${breakpointName}-${space} {
    padding-inline-end: ${space}px;
  }
  .pt-${breakpointName}-${space} {
    padding-block-start: ${space}px;
  }
  .pb-${breakpointName}-${space} {
    padding-block-end: ${space}px;
  }
  .m-${breakpointName}-${space} {
    margin: ${space}px;
  }
  .mx-${breakpointName}-${space} {
    margin-inline: ${space}px;
  }
  .my-${breakpointName}-${space} {
    margin-block: ${space}px;
  }
  .ml-${breakpointName}-${space} {
    margin-inline-start: ${space}px;
  }
  .mr-${breakpointName}-${space} {
    margin-inline-end: ${space}px;
  }
  .mt-${breakpointName}-${space} {
    margin-block-start: ${space}px;
  }
  .mb-${breakpointName}-${space} {
    margin-block-end: ${space}px;
  }
  .g-${breakpointName}-${space} {
    gap: ${space}px;
  }
  .gx-${breakpointName}-${space} {
    column-gap: ${space}px;
  }
  .gy-${breakpointName}-${space} {
    row-gap: ${space}px;
  }`
    )
    .join('')}
}`
  )
  .join('')

const autoMarginUtilities = `
.m-auto {
  margin: auto;
}
.mx-auto {
  margin-inline: auto;
}
.my-auto {
  margin-block: auto;
}
.ml-auto {
  margin-inline-start: auto;
}
.mr-auto {
  margin-inline-end: auto;
}
.mt-auto {
  margin-block-start: auto;
}
.mb-auto {
  margin-block-end: auto;
}`

const responsiveAutoMargins = breakpointValues
  .map(
    ([breakpointName, breakpointValue]) => `
@media ${breakpointValue} {
  .m-${breakpointName}-auto {
    margin: auto;
  }
  .mx-${breakpointName}-auto {
    margin-inline: auto;
  }
  .my-${breakpointName}-auto {
    margin-block: auto;
  }
  .ml-${breakpointName}-auto {
    margin-inline-start: auto;
  }
  .mr-${breakpointName}-auto {
    margin-inline-end: auto;
  }
  .mt-${breakpointName}-auto {
    margin-block-start: auto;
  }
  .mb-${breakpointName}-auto {
    margin-block-end: auto;
  }
}`
  )
  .join('')

/* ==== ==== ==== Font Utility Classes ==== ==== ==== */
const fontUtilities = fontSizes
  .map(
    (fontSize) => `
.fz-${fontSize} {
  font-size: ${fontSize}px;
}`
  )
  .join('\n')

const responsiveFonts = breakpointValues
  .map(
    ([breakpointName, breakpointValue]) => `
@media ${breakpointValue} {
  ${fontSizes
    .map(
      (fontSize) => `
  .fz-${breakpointName}-${fontSize} {
    font-size: ${fontSize}px;
  }`
    )
    .join('')}
}`
  )
  .join('')

const fontWeightUtilities = fontWeights
  .map(
    (fontWeight) => `
.fw-${fontWeight} {
  font-weight: ${fontWeight};
}`
  )
  .join('')

const textAlignUtilities = textAlignValues
  .map(
    (fontAlignment) => `
.ta-${fontAlignment} {
  text-align: ${fontAlignment};
}`
  )
  .join('')

const responsiveTextAlign = breakpointValues
  .map(
    ([breakpointName, breakpointValue]) => `
@media ${breakpointValue} {
  ${textAlignValues
    .map(
      (fontAlignment) => `
  .ta-${breakpointName}-${fontAlignment} {
    text-align: ${fontAlignment};
  }`
    )
    .join('')}
}`
  )
  .join('')

/* ==== ==== ==== Display Utility Classes ==== ==== ==== */
const displayUtilities = displayValues
  .map(
    (display) => `
.d-${display} {
  display: ${display};
}`
  )
  .join('\n')

const responsiveDisplay = breakpointValues
  .map(
    ([breakpointName, breakpointValue]) => `
@media ${breakpointValue} {
  ${displayValues
    .map(
      (display) => `
  .d-${breakpointName}-${display} {
    display: ${display};
  }`
    )
    .join('')}
}`
  )
  .join('')

const alignItemsUtilities = alignItemsValues
  .map(
    (alignment) => `
.ai-${alignment} {
  align-items: ${alignment};
}`
  )
  .join('\n')

const responsiveAlignItems = breakpointValues
  .map(
    ([breakpointName, breakpointValue]) => `
@media ${breakpointValue} {
  ${alignItemsValues
    .map(
      (alignment) => `
  .ai-${breakpointName}-${alignment} {
    align-items: ${alignment};
  }`
    )
    .join('')}
}`
  )
  .join('')

const justifyContentUtilities = justifyContentValues
  .map(
    (justification) => `
.jc-${justification} {
  justify-content: ${justification};
}`
  )
  .join('')

const responsiveJustifyContent = breakpointValues
  .map(
    ([breakpointName, breakpointValue]) => `
@media ${breakpointValue} {
  ${justifyContentValues
    .map(
      (justification) => `
  .jc-${breakpointName}-${justification} {
    justify-content: ${justification};
  }`
    )
    .join('')}
}`
  )
  .join('')

const flexDirectionUtilities = flexDirectionValues
  .map(
    (direction) => `
.fd-${direction} {
  flex-direction: ${direction};
}`
  )
  .join('')

const responsiveFlexDirection = breakpointValues
  .map(
    ([breakpointName, breakpointValue]) => `
@media ${breakpointValue} {
  ${flexDirectionValues
    .map(
      (direction) => `
  .fd-${breakpointName}-${direction} {
    flex-direction: ${direction};
  }`
    )
    .join('')}
}`
  )
  .join('')

/* ==== ==== ==== Border Radius Utility Classes ==== ==== ==== */
const radiusUtilities = radiusValues
  .map(
    (radius) => `
.radius-${radius} {
  border-radius: ${radius}px;
}`
  )
  .join('\n')

const responsiveRadius = breakpointValues
  .map(
    ([breakpointName, breakpointValue]) => `
@media ${breakpointValue} {
  ${radiusValues
    .map(
      (radius) => `
  .radius-${breakpointName}-${radius} {
    border-radius: ${radius}px;
  }`
    )
    .join('')}
}`
  )
  .join('')

/* ==== ==== ==== Size Utility Classes ==== ==== ==== */
const sizeUtilities = sizeValues
  .map(
    (size) => `
.w-${size} {
  width: ${size}px;
}
.h-${size} {
  height: ${size}px;
}`
  )
  .join('')

const responsiveSize = breakpointValues
  .map(
    ([breakpointName, breakpointValue]) => `
@media ${breakpointValue} {
  ${sizeValues
    .map(
      (size) => `
  .w-${breakpointName}-${size} {
    width: ${size}px;
  }
  .h-${breakpointName}-${size} {
    height: ${size}px;
  }`
    )
    .join('')}
}`
  )
  .join('')

/**
 * This is the exported object for utility classes
 * at the end of this there is and object which
 * contains all these generated classes
 * if you wish to remove the classes, simply remove
 * them from the object
 */
export const utilityClasses = {
  colorUtilities,
  spacingUtilities,
  responsiveSpacing,
  autoMarginUtilities,
  responsiveAutoMargins,
  fontUtilities,
  responsiveFonts,
  fontWeightUtilities,
  displayUtilities,
  responsiveDisplay,
  alignItemsUtilities,
  responsiveAlignItems,
  justifyContentUtilities,
  responsiveJustifyContent,
  radiusUtilities,
  responsiveRadius,
  sizeUtilities,
  responsiveSize,
  flexDirectionUtilities,
  responsiveFlexDirection,
  textAlignUtilities,
  responsiveTextAlign
}
