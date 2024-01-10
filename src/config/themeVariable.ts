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
    colorPrimaryBg: 'var(--primary-50)',
    colorPrimaryBgHover: 'var(--primary-100)',
    colorPrimaryBorder: 'var(--primary-200)',
    colorPrimaryBorderHover: 'var(--primary-300)',
    colorPrimaryHover: 'var(--primary-400)',
    colorPrimary: 'var(--primary-500)',
    colorPrimaryActive: 'var(--primary-600)',
    colorPrimaryTextHover: 'var(--primary-400)',
    colorPrimaryText: 'var(--primary-500)',
    colorPrimaryTextActive: 'var(--primary-600)',
    borderRadius: 20,
    borderRadiusLG: 20,
    borderRadiusSM: 20,
    defaultShadow: 'none',
    primaryShadow: 'none'
  },
  Select: {
    colorBgElevated: 'var(--neutral-0)',
    selectorBg: 'var(--neutral-0)',
    colorText: 'var(--neutral-900)',
    colorPrimaryBg: 'var(--primary-0)',
    colorPrimaryBgHover: 'var(--primary-100)',
    colorPrimaryBorder: 'var(--primary-200)',
    colorPrimaryBorderHover: 'var(--primary-300)',
    colorPrimaryHover: 'var(--primary-400)',
    colorPrimary: 'var(--primary-500)',
    colorPrimaryActive: 'var(--primary-600)',
    colorPrimaryTextHover: 'var(--primary-400)',
    colorPrimaryText: 'var(--primary-500)',
    colorPrimaryTextActive: 'var(--primary-600)',
    optionSelectedBg: 'var(--primary-100)'
  }
}
