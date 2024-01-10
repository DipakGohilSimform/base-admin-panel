import { Button as AntButton } from 'antd'
import styled from 'styled-components'

export const Button = styled(AntButton)`
  color: var(--white);
  font-size: 12px;
  font-weight: 600;
  background-color: var(--primary-100);
  padding: 8px 30px;
  border-radius: 10px;
  min-height: 33px;
  border: none;

  &:hover {
    color: var(--primary-50) !important;
  }
`
