interface ColorValues {
  white: string
  black: string
  pink: string
  lavender: string
  lotion: string
  'cyan-50': string
  'cyan-100': string
  'primary-50': string
  'primary-100': string
}

export const themes: Record<'default' | 'dark', ColorValues> = {
  default: {
    white: '255, 255, 255',
    black: '0, 0, 0',
    pink: '255, 199, 212',
    lavender: '229, 225, 251',
    lotion: '250, 250, 250',
    'cyan-50': '236,249,252',
    'cyan-100': '38, 192, 226',
    'primary-50': '245, 248, 255',
    'primary-100': '96, 91, 255'
  },
  dark: {
    white: '255, 255, 255',
    black: '0, 0, 0',
    pink: '255, 199, 212',
    lavender: '229, 225, 251',
    lotion: '250, 250, 250',
    'cyan-50': '236,249,252',
    'cyan-100': '38, 192, 226',
    'primary-50': '75, 7, 23',
    'primary-100': '130, 23, 52'
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
