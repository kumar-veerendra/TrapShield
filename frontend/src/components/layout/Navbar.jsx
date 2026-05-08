// import { ShieldCheck } from 'lucide-react'
// import ThemeToggle from './ThemeToggle'

// const Navbar = () => {
//   return (
//     <nav className='sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/10'>
//       <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>

//         <div className='flex items-center gap-3'>
//           <div className='p-2 rounded-xl bg-primary/10 border border-primary/20'>
//             <ShieldCheck className='text-primary w-6 h-6' />
//           </div>

//           <div>
//             <h1 className='text-xl font-bold tracking-wide'>TrapShield</h1>
//             <p className='text-xs text-slate-400'>AI Threat Detection</p>
//           </div>
//         </div>

//         <div className='flex items-center gap-5'>
//           <a href='#' className='hover:text-primary transition'>Home</a>
//           <a href='#analyze' className='hover:text-primary transition'>Analyze</a>
//           <ThemeToggle />
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar


import { useState } from 'react'
import {
  ShieldCheck,
  Menu,
  X,
} from 'lucide-react'

import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/10'>

      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>

        {/* Logo */}
        <div className='flex items-center gap-3'>

          <div className='p-2 rounded-xl bg-primary/10 border border-primary/20'>
            <ShieldCheck className='text-primary w-6 h-6' />
          </div>

          <div>
            <h1 className='text-xl font-bold tracking-wide'>
              TrapShield
            </h1>

            <p className='text-xs text-slate-400'>
              AI Threat Detection
            </p>
          </div>

        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-6'>

          <a
            href='#'
            className='hover:text-primary transition duration-300'
          >
            Home
          </a>

          <a
            href='#analyze'
            className='hover:text-primary transition duration-300'
          >
            Analyze
          </a>

          <ThemeToggle />

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='md:hidden p-2 rounded-xl border border-white/10 hover:border-primary transition'
        >

          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}

        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (

        <div className='md:hidden px-6 pb-5'>

          <div className='glass rounded-2xl p-5 flex flex-col gap-5'>

            <a
              href='#'
              onClick={() => setMenuOpen(false)}
              className='hover:text-primary transition'
            >
              Home
            </a>

            <a
              href='#analyze'
              onClick={() => setMenuOpen(false)}
              className='hover:text-primary transition'
            >
              Analyze
            </a>

            <div className='pt-2 border-t border-white/10'>
              <ThemeToggle />
            </div>

          </div>

        </div>

      )}

    </nav>
  )
}

export default Navbar