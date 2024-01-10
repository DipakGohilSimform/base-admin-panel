import React from 'react'
import GlobalStyle from '../src/config/global.style'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '../src/context/ThemeContext'

const withTheme = (StoryFn: any) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <StoryFn />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
} // export all decorators that should be globally applied in an array export const decorators = [withTheme];

export const decorators = [withTheme]
