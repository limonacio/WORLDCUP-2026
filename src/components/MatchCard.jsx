const flagUrl = (code, size = 40) =>
  code ? `https://flagcdn.com/w${size}/${code}.png` : ''

function MatchCard({ match }) {
  const hasResult =
    match.status === 'FT' ||
    (match.homeScore != null && match.awayScore != null)

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">

      <div className="flex justify-between items-center px-5 py-3 border-b border-slate-600">
        <div>
          <div className="text-cyan-400 font-bold text-lg">{match.date}</div>
          <div className="text-slate-400 text-sm">
            {match.group ? `Group ${match.group} · ` : ''}FIFA World Cup
          </div>
        </div>
        <div>
          {hasResult ? (
            <span className="text-green-400 text-xs font-bold tracking-wider">FINAL</span>
          ) : (
            <span className="text-slate-400 text-sm">🕒 {match.kickoffArgentina}</span>
          )}
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="flex items-center justify-center gap-6">

          <div className="flex flex-col items-center text-center flex-1">
            <img src={flagUrl(match.homeFlag)} alt={match.home} className="h-8 mb-2 rounded shadow" />
            <span className="font-bold text-base md:text-lg leading-tight break-words">
              {match.home}
            </span>
          </div>

          <div className="text-center min-w-[90px]">
            {hasResult ? (
              <div className="text-cyan-400 font-bold text-3xl md:text-4xl">
                {match.homeScore} – {match.awayScore}
              </div>
            ) : (
              <div className="text-cyan-400 font-bold text-3xl">VS</div>
            )}
          </div>

          <div className="flex flex-col items-center text-center flex-1">
            <img src={flagUrl(match.awayFlag)} alt={match.away} className="h-8 mb-2 rounded shadow" />
            <span className="font-bold text-base md:text-lg leading-tight break-words">
              {match.away}
            </span>
          </div>

        </div>

        <div className="mt-5 text-center text-slate-400 text-sm">
          📍 {match.city}
          {match.stadium && <span className="text-slate-500"> · {match.stadium}</span>}
        </div>
      </div>

    </div>
  )
}

export default MatchCard