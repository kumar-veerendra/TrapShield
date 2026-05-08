const tabs = ['URL', 'SMS', 'EMAIL']

const AnalyzerTabs = ({ active, setActive }) => {
  return (
    <div className='flex justify-center gap-4 flex-wrap'>
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`
            px-8 py-4 rounded-2xl border transition-all duration-300
            ${active === tab
              ? 'bg-primary text-white border-primary shadow-glow'
              : 'border-white/10 hover:border-primary/40'}
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default AnalyzerTabs