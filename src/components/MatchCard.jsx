function MatchCard({ match }) {
  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">

      {/* CABECERA */}
      <div className="flex justify-between items-center px-5 py-3 border-b border-slate-600">

        <div>
          <div className="text-cyan-400 font-bold text-lg">
            {match.date}
          </div>

          <div className="text-slate-400 text-sm">
            Grupo {match.group}
          </div>
        </div>

        <div className="text-white font-semibold">
          🕒 {match.kickoffArgentina}
        </div>

      </div>

      {/* PARTIDO */}
      <div className="px-6 py-8">

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">

          {/* LOCAL */}
          <div className="flex items-center justify-end gap-3">

            <img
              src={`https://flagcdn.com/w40/${match.homeFlag}.png`}
              alt={match.home}
              className="w-8 h-6 rounded-sm"
            />

            <span
              className="
                font-bold
                text-base
                md:text-2xl
                text-right
                leading-tight
                break-words
                max-w-[90px]
                md:max-w-none
              "
            >
              {match.home}
            </span>

          </div>

          {/* VS */}
            <div
              className="
                text-cyan-400
                font-bold
                text-lg
                md:text-xl
                px-1
                md:px-2
              "
              >
              VS
            </div>

          {/* VISITANTE */}
          <div className="flex items-center justify-start gap-3">

            <img
              src={`https://flagcdn.com/w40/${match.awayFlag}.png`}
              alt={match.away}
              className="w-8 h-6 rounded-sm"
            />

            <span
              className="
                font-bold
                text-base
                md:text-2xl
                text-left
                leading-tight
                break-words
                max-w-[90px]
                md:max-w-none
              "
            >
              {match.away}
            </span>

          </div>

        </div>

        <div className="mt-6 text-center text-slate-400">
          📍 {match.city}
        </div>

      </div>

    </div>
  )
}

export default MatchCard