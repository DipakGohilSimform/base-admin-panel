import { Badge as AntBadge } from 'antd'
import styled, { css } from 'styled-components'

export const Badge = styled(AntBadge)`
  margin-bottom: 6px;
  .ant-badge-status-dot {
    display: none !important;
  }
  .ant-badge-status-text {
    display: inline-block;
    width: 100px;
    max-width: 100%;
    color: var(--white) !important;
    text-align: center;
    padding: 3px;
    border-radius: 3px;
  }
  ${({ status }) => {
    if (status === 'default') {
      return css`
        background-color: var(--cyan-100);
      `
    } else if (status === 'success') {
      return css`
        background-color: var(--magenta);
      `
    } else if (status === 'warning') {
      return css`
        background-color: var(--orange-100);
      `
    }
    {
      return css`
        background-color: var(--white);
        color: var(--primary-100);
      `
    }
  }}
`
