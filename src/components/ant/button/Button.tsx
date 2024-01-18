import { Button as AntButton } from 'antd'
import styled, { css } from 'styled-components'
import { breakpointsDown } from '../../../config/variable'

export const Button = styled(AntButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  &:active {
    background: var(--primary-ribbon-400) !important;
  }
  ${({ type }) => {
    if (type === 'default') {
      return css`
        width: 164px;
        max-width: 100%;
        font-weight: 400;
        gap: 10px;
        padding-inline: 20px;
        border: none;
        @media (${breakpointsDown.xs}) {
          width: 100%;
        }
        &:hover,
        &:active {
          border: 1px solid var(--primary-ribbon-200);
          background-color: var(--primary-ribbon-50);
        }
      `
    }
    return null
  }}
`
