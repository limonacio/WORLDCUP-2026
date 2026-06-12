import { roundOf32 } from '../data/knockout'

function Knockout() {
  return (
    <div className="p-10">

      <h1 className="text-6xl font-light text-center mb-10">
        Knockout Stage
      </h1>

      <div className="text-cyan-400 text-center tracking-[5px] font-bold mb-12">
        ROUND OF 32
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

        {roundOf32.map((match, index) => (

          <div
            key={index}
            className="
              bg-slate-900/70
              border
              border-cyan-500/30
              rounded-2xl
              p-5
            "
          >

            <div className="flex items-center gap-3 font-bold text-xl">

              <img
                src={`https://flagcdn.com/${match.flag1}.svg`}
                alt={match.team1}
                className="w-8"
              />

              <span>
                {match.team1}
              </span>

            </div>

            <div className="border-t border-slate-700 my-4"></div>

            <div className="flex items-center gap-3 font-bold text-xl">

              <img
                src={`https://flagcdn.com/${match.flag2}.svg`}
                alt={match.team2}
                className="w-8"
              />

              <span>
                {match.team2}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Knockout