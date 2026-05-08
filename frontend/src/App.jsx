import Home from './pages/Home'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className='bg-slate-50 dark:bg-darkBg transition-all duration-300 min-h-screen text-slate-900 dark:text-white'>
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App