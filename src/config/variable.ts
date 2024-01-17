interface ColorValues {
  white: string
  black: string
  pink: string
  lavender: string
  lotion: string
  red: string
  magenta: string
  green: string
  gray: string
  'orange-50': string
  'orange-100': string
  'cyan-50': string
  'cyan-100': string
  'primary-50': string
  'primary-100': string
  'primary-ribbon-50': string
  'primary-ribbon-100': string
  'primary-ribbon-200': string
  'primary-ribbon-300': string
  'primary-ribbon-400': string
  'primary-ribbon-500': string
  'primary-ribbon-600': string
  'primary-ribbon-700': string
  'primary-ribbon-800': string
  'primary-ribbon-900': string
  'primary-ribbon-950': string
}

export const themes: Record<'default' | 'dark', ColorValues> = {
  default: {
    white: '255, 255, 255',
    black: '0, 0, 0',
    pink: '255, 199, 212',
    lavender: '229, 225, 251',
    lotion: '250, 250, 250',
    red: '231, 29, 54',
    magenta: '239, 55, 255',
    green: '43, 153, 67',
    gray: '130, 134, 145',
    'orange-50': '250, 231, 225',
    'orange-100': '255, 143, 107',
    'cyan-50': '236,249,252',
    'cyan-100': '38, 192, 226',
    'primary-50': '245, 248, 255',
    'primary-100': '96, 91, 255',
    'primary-ribbon-50': '236 240 255',
    'primary-ribbon-100': '221 227 255',
    'primary-ribbon-200': '194 204 255',
    'primary-ribbon-300': '156 169 255',
    'primary-ribbon-400': '117 123 255',
    'primary-ribbon-500': '96 91 255',
    'primary-ribbon-600': '75 54 245',
    'primary-ribbon-700': '64 42 216',
    'primary-ribbon-800': '52 37 174',
    'primary-ribbon-900': '46 38 137',
    'primary-ribbon-950': '29 22 80'
  },
  dark: {
    white: '255, 255, 255',
    black: '0, 0, 0',
    pink: '255, 199, 212',
    lavender: '229, 225, 251',
    lotion: '250, 250, 250',
    red: '231, 29, 54, 1',
    magenta: '239, 55, 255',
    green: '43, 153, 67',
    gray: '130, 134, 145',
    'orange-50': '250, 231, 225',
    'orange-100': '255, 143, 107',
    'cyan-50': '236,249,252',
    'cyan-100': '38, 192, 226',
    'primary-50': '75, 7, 23',
    'primary-100': '130, 23, 52',
    'primary-ribbon-50': '29 22 80',
    'primary-ribbon-100': '46 38 137',
    'primary-ribbon-200': '52 37 174',
    'primary-ribbon-300': '64 42 216',
    'primary-ribbon-400': '75 54 245',
    'primary-ribbon-500': '96 91 255',
    'primary-ribbon-600': '117 123 255',
    'primary-ribbon-700': '156 169 255',
    'primary-ribbon-800': '194 204 255',
    'primary-ribbon-900': '221 227 255',
    'primary-ribbon-950': '236 240 255'
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
