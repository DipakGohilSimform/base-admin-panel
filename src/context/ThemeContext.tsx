import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { ConfigProvider } from 'antd'
import { themes } from '../config/variable'
import { globalTokens, componentTokens } from '../config/themeVariable'

type ThemeContextType = [
  keyof typeof themes,
  Dispatch<SetStateAction<keyof typeof themes>>
]
const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeColor, setThemeColor] = useState<keyof typeof themes>(() => {
    const theme = localStorage.getItem('data-theme') || 'default'
    return theme === 'default' ? 'default' : 'dark'
  })
  const value = useMemo<ThemeContextType>(
    () => [themeColor, setThemeColor],
    [themeColor]
  )
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeColor)
    localStorage.setItem('data-theme', themeColor)
  }, [themeColor])

  return (
    <ThemeContext.Provider value={value}>
      <ConfigProvider
        theme={{
          token: globalTokens,
          components: componentTokens,
          cssVar: true,
          hashed: false
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('Invalid hook call')
  }
  return context
}
