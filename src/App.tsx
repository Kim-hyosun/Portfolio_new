import { BgDraw1, BgDraw2, BgMain } from './components/Background/Background'
import { Cursor } from './components/Cursor'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Loading } from './components/Loading'
import { MenuPage } from './components/MenuPage'
import { useCursor } from './hooks/useCursor'
import { useLoading } from './hooks/useLoading'
import { useMenu } from './hooks/useMenu'
import { useTheme } from './hooks/useTheme'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Skills } from './sections/Skills'
import { Work } from './sections/Work'

function App() {
  useCursor()
  const { isDark, toggle: toggleTheme } = useTheme()
  const { isOpen: isMenuOpen, open: openMenu, close: closeMenu } = useMenu()
  const isLoadingVisible = useLoading()

  return (
    <>
      <div className="wrap">
        <BgMain />
        <BgDraw1 />
        <Header isDark={isDark} onToggleTheme={toggleTheme} onMenuOpen={openMenu} />
        <main>
          <h2 className="title">PORTFOLIO</h2>
          <Work />
          <Skills />
          <About />
          <Contact />
        </main>
        <BgDraw2 />
        <Footer />
        <MenuPage isOpen={isMenuOpen} onClose={closeMenu} />
        <Loading isVisible={isLoadingVisible} />
      </div>
      <Cursor />
    </>
  )
}

export default App
