import { ThemeToggle } from './ThemeToggle'

type Props = {
  isDark: boolean
  onToggleTheme: () => void
  onMenuOpen: () => void
}

export function Header({ isDark, onToggleTheme, onMenuOpen }: Props) {
  return (
    <header>
      <h1 className="logo">
        <a href="#" data-cursor="click" data-name="">
          logo
        </a>
      </h1>
      <div className="icons">
        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        <a
          href="#"
          className="menuBtn"
          data-cursor="click"
          data-name=""
          onClick={(e) => {
            e.preventDefault()
            onMenuOpen()
          }}
        >
          menu버튼
        </a>
      </div>
    </header>
  )
}
