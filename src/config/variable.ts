interface ColorValues {
  white: string
  black: string
  'primary-50': string
  'primary-100': string
  'primary-200': string
  'primary-300': string
  'primary-400': string
  'primary-500': string
  'primary-600': string
  'primary-700': string
  'primary-800': string
  'primary-900': string
  'primary-950': string
  'neutral-0': string
  'neutral-50': string
  'neutral-100': string
  'neutral-200': string
  'neutral-300': string
  'neutral-400': string
  'neutral-500': string
  'neutral-600': string
  'neutral-700': string
  'neutral-800': string
  'neutral-900': string
  'neutral-950': string
  'neutral-1000': string
}

export const themes: Record<'default' | 'dark', ColorValues> = {
  default: {
    white: '255, 255, 255',
    black: '0, 0, 0',
    'primary-50': '255, 240, 240',
    'primary-100': '254, 230, 231',
    'primary-200': '252, 207, 210',
    'primary-300': '250, 168, 174',
    'primary-400': '246, 116, 129',
    'primary-500': '239, 82, 101',
    'primary-600': '219, 36, 66',
    'primary-700': '185, 24, 56',
    'primary-800': '155, 23, 54',
    'primary-900': '130, 23, 52',
    'primary-950': '75, 7, 23',
    'neutral-0': '255, 255, 255',
    'neutral-50': '248, 250, 252',
    'neutral-100': '241, 245, 249',
    'neutral-200': '226, 232, 240',
    'neutral-300': '203, 213, 225',
    'neutral-400': '148, 163, 184',
    'neutral-500': '100, 116, 139',
    'neutral-600': '71, 85, 105',
    'neutral-700': '51, 65, 85',
    'neutral-800': '30, 41, 59',
    'neutral-900': '15, 23, 42',
    'neutral-950': '2, 6, 23',
    'neutral-1000': '0, 0, 0'
  },
  dark: {
    white: '255, 255, 255',
    black: '0, 0, 0',
    'primary-50': '75, 7, 23',
    'primary-100': '130, 23, 52',
    'primary-200': '155, 23, 54',
    'primary-300': '185, 24, 56',
    'primary-400': '219, 36, 66',
    'primary-500': '239, 82, 101',
    'primary-600': '246, 116, 129',
    'primary-700': '250, 168, 174',
    'primary-800': '252, 207, 210',
    'primary-900': '254, 230, 231',
    'primary-950': '255, 240, 240',
    'neutral-0': '0, 0, 0',
    'neutral-50': '2, 6, 23',
    'neutral-100': '15, 23, 42',
    'neutral-200': '30, 41, 59',
    'neutral-300': '51, 65, 85',
    'neutral-400': '71, 85, 105',
    'neutral-500': '100, 116, 139',
    'neutral-600': '148, 163, 184',
    'neutral-700': '203, 213, 225',
    'neutral-800': '226, 232, 240',
    'neutral-900': '241, 245, 249',
    'neutral-950': '248, 250, 252',
    'neutral-1000': '255, 255, 255'
  }
}

export const breakpoints = {
  xs: '(min-width: 480px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
}

export const breakpointsDown = {
  xs: '(max-width: 479px)',
  sm: '(max-width: 575px)',
  md: '(max-width: 767px)',
  lg: '(max-width: 991px)',
  xl: '(max-width: 1199px)',
  xxl: '(max-width: 1599px)'
}

export const spacingValues = [0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32]

export const sizeValues = [1, 2, 4, 8, 10, 12, 14, 16, 20, 24, 32, 36, 40, 44]

export const fontSizes = [6, 8, 10, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60]

export const fontWeights = [300, 400, 500, 600, 700, 800, 900]

export const radiusValues = [0, 2, 4, 6, 8, 12, 16, 24, 1000]

export const displayValues = [
  'none',
  'block',
  'inline',
  'inline-block',
  'flex',
  'grid'
]

export const alignItemsValues = [
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'baseline'
]

export const justifyContentValues = [
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly'
]

export const flexDirectionValues = [
  'column',
  'column-reverse',
  'row',
  'row-reverse'
]

export const textAlignValues = [
  'start',
  'center',
  'end',
  'left',
  'right',
  'justify'
]

export const rem = (pxValue: number | number[]): string => {
  const ratio = 16 // Set according to the project configuration ratio
  if (Array.isArray(pxValue)) {
    ;[pxValue] = pxValue
  }
  const parsedPxValue = parseInt(pxValue.toString(), 10)
  return `${parsedPxValue / ratio}rem`
}
