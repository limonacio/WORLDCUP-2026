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

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {calculatedGroups.map((group) => (
          <StandingsTable key={group.group} group={group} />
        ))}
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-4 mt-12 mb-12">

        <Link to="/teams" className="bg-slate-900/70 border border-cyan-500/30 rounded-xl p-5 text-center block hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300">
          <div className="text-4xl mb-2">🏆</div>
          <div className="text-3xl font-bold text-cyan-400">48</div>
          <div className="text-slate-400">Teams</div>
        </Link>

        <Link to="/hosts" className="bg-slate-900/70 border border-cyan-500/30 rounded-xl p-5 text-center block hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300">
          <div className="text-4xl mb-2">🌎</div>
          <div className="text-3xl font-bold text-cyan-400">3</div>
          <div className="text-slate-400">Host Countries</div>
        </Link>

        <Link
          to="/knockout"
          className="border-2 border-yellow-500/60 rounded-xl p-5 text-center block hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-1 transition-all duration-300"
          style={{ background: 'linear-gradient(135deg, rgba(20,14,0,0.7) 0%, rgba(40,30,0,0.7) 100%)' }}
        >
          <div className="text-4xl mb-2 animate-bounce">🏆</div>
          <div className="text-2xl font-bold text-yellow-400">Knockout Bracket</div>
          <div className="text-yellow-200/70 text-sm mt-1">View Round of 16 →</div>
        </Link>

      </div>

    </div>
  )
}

export default Standings