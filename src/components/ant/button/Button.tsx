import { Button as AntButton } from 'antd'
import styled, { css } from 'styled-components'

export const Button = styled(AntButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  &:active {
    background-color: var(--primary-ribbon-400);
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
        @media (max-width: 480px) {
          width: 100%;
        }
        &:hover,
        &:active {
          border: none !important;
          color: var(--black) !important;
        }
      `
    }
  }}
`
