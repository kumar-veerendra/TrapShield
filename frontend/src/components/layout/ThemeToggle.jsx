import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Moon, Sun } from 'lucide-react'

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className='p-2 rounded-xl border border-white/10 hover:border-primary transition'
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default ThemeToggle