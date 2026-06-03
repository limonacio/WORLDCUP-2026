function MatchCard({ match }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="text-center">

        <div className="text-xl font-bold">
          {match.home}
        </div>

        <div className="my-3 text-slate-400">
          VS
        </div>

        <div className="text-xl font-bold">
          {match.away}
        </div>

        <div className="mt-4 text-slate-400">
          {match.date}
        </div>

        <div className="mt-3">
          <span className="bg-cyan-500 text-black px-3 py-1 rounded-full font-semibold">
            {match.status}
          </span>
        </div>

      </div>
    </div>
  )
}

export default MatchCard