import type { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

import { darkTheme, lightTheme } from 'app/ui'

export const initialTheme = lightTheme

export type ThemeType = typeof darkTheme | typeof lightTheme

const Context = createContext<[ThemeType, Dispatch<SetStateAction<ThemeType>>]>([
  initialTheme,
  () => {},
])

const useContextFunc = () => useContext(Context)

/**
 * @description
 * アプリのテーマを取得・更新するカスタムフック
 */
export const useAppTheme = () => {
  const [theme, setTheme] = useContextFunc()

  const toggleTheme = () =>
    setTheme(state => (state === lightTheme ? darkTheme : lightTheme))

  useEffect(() => {
    if (!(window && document)) return
    /**
     * @description
     * テーマが変更された時にhtmlタグのclassNameを変更する
     * cf _documnt.page.tsx
     */
    document?.querySelector('html')?.setAttribute('class', theme)
  }, [theme])

  return { theme, toggleTheme }
}

export const AppThemeProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(initialTheme)

  return <Context.Provider value={[theme, setTheme]}>{children}</Context.Provider>
}
