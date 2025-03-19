import { useState } from 'react'
import ImageGallery from './components/ImageGallery'
import GlobalStyles from './styles/GlobalStyles'
import styled from 'styled-components'
import { FiGithub, FiMoon, FiSun } from 'react-icons/fi'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <AppContainer>
      <GlobalStyles />
      <Header>
        <Logo>FUTURA</Logo>
        <NavLinks>
          <NavLink href="#">Collections</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Contact</NavLink>
        </NavLinks>
        <HeaderActions>
          <ThemeToggle onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FiSun /> : <FiMoon />}
          </ThemeToggle>
          <GithubLink href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </GithubLink>
        </HeaderActions>
      </Header>
      
      <MainContent>
        <ImageGallery />
      </MainContent>
      
      <Footer>
        <FooterText>
          &copy; {new Date().getFullYear()} Futura Lingerie • All images are for demonstration purposes only
        </FooterText>
      </Footer>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: rgba(10, 10, 20, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(100, 100, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
`

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 3px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled.a`
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-primary);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--accent-primary);
    
    &:after {
      width: 100%;
    }
  }
`

const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

const ThemeToggle = styled.button`
  background: transparent;
  color: var(--text-primary);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(100, 100, 255, 0.1);
    color: var(--accent-primary);
  }
`

const GithubLink = styled.a`
  color: var(--text-primary);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(100, 100, 255, 0.1);
    color: var(--accent-primary);
  }
`

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  width: 100%;
`

const Footer = styled.footer`
  padding: 1.5rem;
  text-align: center;
  background: rgba(10, 10, 20, 0.8);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(100, 100, 255, 0.1);
`

const FooterText = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
`

export default App
