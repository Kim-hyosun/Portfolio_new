import styles from './ThemeToggle.module.css'

type Props = {
  isDark?: boolean
  onToggle?: () => void
}

export function ThemeToggle({ isDark, onToggle }: Props) {
  return (
    <button
      type="button"
      className={styles.themeToggle}
      onClick={onToggle}
      data-cursor="click"
      data-name=""
      aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
      aria-pressed={isDark ?? false}
    >
      <span className={styles.srOnly}>테마 전환</span>
    </button>
  )
}
