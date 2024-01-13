import { OverrideToken, AliasToken } from 'antd/es/theme/interface'

export const globalTokens: Partial<AliasToken> = {
  fontFamily: `'Manrope', sans-serif`,
  lineWidthFocus: 0,
  controlOutline: 'var(--primary-200)',
  controlOutlineWidth: 1,
  borderRadius: 2,
  colorPrimaryBg: 'var(--primary-50)',
  colorPrimaryBgHover: 'var(--primary-100)',
  colorPrimaryBorder: 'var(--primary-200)',
  colorPrimaryBorderHover: 'var(--primary-300)',
  colorPrimaryHover: 'var(--primary-400)',
  colorPrimary: 'var(--primary-500)',
  colorPrimaryActive: 'var(--primary-600)',
  colorPrimaryTextHover: 'var(--primary-400)',
  colorPrimaryText: 'var(--primary-500)',
  colorPrimaryTextActive: 'var(--primary-600)'
}

export const componentTokens: OverrideToken = {
  Button: {
    primaryColor: 'var(--white)',
    colorPrimary: 'var(--primary-100)',
    defaultBg: 'var(--lotion)',
    fontSize: 16,
    fontWeight: 600,
    borderRadius: 10,
    controlHeight: 50,
    controlHeightSM: 33,
    borderRadiusSM: 10,
    contentFontSizeSM: 12,
    defaultBorderColor: 'transparent',
    colorBorder: 'transparent',
    textHoverBg: 'var(--black)',
    colorPrimaryHover: 'var(--primary-ribbon-600)',
    colorPrimaryText: 'var(--black)'
  },
  Radio: {
    buttonBg:'var(--orange-50)',
    buttonCheckedBg:'var(--orange-100)',
    colorBorder:'transparent'
  },
  Input: {
    borderRadius:10,
    colorPrimaryHover:'var(--lavender)',
    colorPrimaryActive:'var(--red)'
  },
  Select: {
    colorBgElevated: 'var(--neutral-0)',
    selectorBg: 'var(--neutral-0)',
    colorText: 'var(--neutral-900)',
    colorPrimaryBg: 'var(--primary-100)',
    colorPrimaryBgHover: 'var(--primary-100)',
    colorPrimaryBorder: 'var(--primary-200)',
    colorPrimaryBorderHover: 'var(--primary-300)',
    colorPrimaryHover: 'var(--primary-400)',
    colorPrimary: 'var(--primary-ribbon-500)',
    colorPrimaryActive: 'var(--primary-600)',
    colorPrimaryTextHover: 'var(--primary-400)',
    colorPrimaryText: 'var(--primary-500)',
    colorPrimaryTextActive: 'var(--primary-600)',
    optionSelectedBg: 'var(--primary-100)'
  }
}
