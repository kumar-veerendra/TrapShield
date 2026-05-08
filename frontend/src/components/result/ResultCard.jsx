const ResultCard = ({ result }) => {
  return (
    <div className='mt-12 glass rounded-3xl p-8'>

      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>

        <div>
          <p className='text-slate-400'>Threat Score</p>
          <h2 className='text-5xl font-bold text-danger'>82%</h2>
        </div>

        <div className='px-5 py-3 rounded-2xl bg-danger/10 border border-danger/20 text-danger font-semibold'>
          HIGH RISK
        </div>
      </div>

      <div className='mt-10'>
        <h3 className='text-xl font-semibold mb-4'>Detected Indicators</h3>

        <div className='flex flex-wrap gap-3'>
          {result.indicators.map((item, index) => (
            <span
              key={index}
              className='px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-sm'
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className='mt-10'>
        <h3 className='text-xl font-semibold mb-4'>AI Explanation</h3>

        <p className='text-slate-400 leading-8'>
          {result.explanation}
        </p>
      </div>

    </div>
  )
}

export default ResultCard