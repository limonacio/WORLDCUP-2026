import { results } from '../data/results'

function MatchCard({ match }) {

  const result = results.find(
    (r) =>
      r.home === match.home &&
      r.away === match.away
  )

  const hasResult = !!result

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

        <div className="flex items-center justify-center gap-6">

          {/* LOCAL */}
          <div className="flex flex-col items-center text-center flex-1">

            <img
              src={`https://flagcdn.com/w40/${match.homeFlag}.png`}
              alt={match.home}
              className="w-10 h-8 rounded-sm mb-2"
            />

            <span
              className="
                font-bold
                text-base
                md:text-2xl
                leading-tight
                break-words
              "
            >
              {match.home}
            </span>

          </div>

          {/* RESULTADO */}
          <div className="text-center min-w-[90px]">

            {hasResult ? (
              <>
                <div className="text-cyan-400 font-bold text-3xl md:text-4xl">
                  {result.homeGoals} - {result.awayGoals}
                </div>

                <div className="text-green-400 text-xs font-bold mt-1">
                  FINAL
                </div>
              </>
            ) : (
              <div className="text-cyan-400 font-bold text-3xl">
                VS
              </div>
            )}

          </div>

          {/* VISITANTE */}
          <div className="flex flex-col items-center text-center flex-1">

            <img
              src={`https://flagcdn.com/w40/${match.awayFlag}.png`}
              alt={match.away}
              className="w-10 h-8 rounded-sm mb-2"
            />

            <span
              className="
                font-bold
                text-base
                md:text-2xl
                leading-tight
                break-words
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