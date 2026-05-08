const UrlAnalyzer = ({ value, setValue, handleAnalyze }) => {
  return (
    <div className='glass rounded-3xl p-8 mt-10'>

      <h2 className='text-2xl font-semibold mb-6'>URL Threat Analyzer</h2>

      <input
        type='text'
        placeholder='Enter suspicious URL...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='w-full p-4 rounded-2xl bg-transparent border border-white/10 focus:border-primary outline-none'
      />

      <button
        onClick={handleAnalyze}
        className='mt-6 bg-primary hover:bg-blue-600 transition px-8 py-4 rounded-2xl font-medium shadow-glow'
      >
        Analyze URL
      </button>

    </div>
  )
}

export default UrlAnalyzer