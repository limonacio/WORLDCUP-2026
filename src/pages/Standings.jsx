import { Link } from 'react-router-dom'
import { groups } from '../data/groups'
import StandingsTable from '../components/StandingsTable'
import { calculateStandings } from '../utils/calculateStandings'


const calculatedGroups = calculateStandings(groups)



function Standings() {
  return (
    <div className="p-10">

      <h1 className="text-5xl font-light text-center mb-10">
        World Cup Standings
      </h1>

      

      {/* TABLAS DE POSICIONES */}

      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        "
      >
        {calculatedGroups.map((group) => (
          <StandingsTable
            key={group.group}
            group={group}
          />
        ))}
      </div>



{/* CARDS SUPERIORES */}

      <div
  className="
    max-w-5xl
    mx-auto
    grid
    md:grid-cols-3
    gap-4
    mt-12
    mb-12
  "
>

        {/* TEAMS */}

        <Link
          to="/teams"
          className="
            bg-slate-900/70
            border
            border-cyan-500/30
            rounded-xl
            p-5
            text-center
            block
            hover:border-cyan-400
            hover:shadow-lg
            hover:shadow-cyan-500/20
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >
          <div className="text-4xl mb-2">🏆</div>

          <div className="text-3xl font-bold text-cyan-400">
            48
          </div>

          <div className="text-slate-400">
            Teams
          </div>
        </Link>

        {/* HOST COUNTRIES */}

        <Link
          to="/hosts"
          className="
            bg-slate-900/70
            border
            border-cyan-500/30
            rounded-xl
            p-5
            text-center
            block
            hover:border-cyan-400
            hover:shadow-lg
            hover:shadow-cyan-500/20
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >
          <div className="text-4xl mb-2">🌎</div>

          <div className="text-3xl font-bold text-cyan-400">
            3
          </div>

          <div className="text-slate-400">
            Host Countries
          </div>
        </Link>

        {/* KNOCKOUT */}

        <Link
          to="/knockout"
          className="
            bg-slate-900/70
            border
            border-cyan-500/30
            rounded-xl
            p-5
            text-center
            block
            hover:border-cyan-400
            hover:shadow-lg
            hover:shadow-cyan-500/20
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >
          <div className="text-4xl mb-2">
            🏆
          </div>

          <div className="text-2xl font-bold text-cyan-400">
            Knockout
          </div>

          <div className="text-slate-400">
            View Bracket
          </div>
        </Link>

      </div>


    </div>
  )
}

export default Standings