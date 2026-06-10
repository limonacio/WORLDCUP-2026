import { useState } from 'react'
import { matches } from '../data/matches'
import MatchCard from '../components/MatchCard'


function Matches() {
    const [selectedGroup, setSelectedGroup] = useState('ALL')

    const filteredMatches =
      selectedGroup === 'ALL'
        ? matches
        : matches.filter(
            (match) => match.group === selectedGroup
          )

    const nextMatch = matches[0]


  return (
    <div className="p-6">

      <h1 className="text-5xl font-light mb-10">
        FIFA World Cup 2026 Fixtures
      </h1>

      {/* NEXT MATCH */}

      <div
        className="
          mb-10
          bg-slate-900/70
          border
          border-cyan-500/30
          rounded-2xl
          p-8
          backdrop-blur-sm
          shadow-lg
          shadow-cyan-500/10
          text-center
        "
      >

        <div className="text-cyan-400 text-sm font-bold tracking-[3px] mb-4">
          NEXT MATCH
        </div>

        <div className="flex justify-center items-center gap-8 mb-6">

          <div className="flex flex-col items-center">
            <img
              src={`https://flagcdn.com/${nextMatch.homeFlag}.svg`}
              alt={nextMatch.homeTeam}
              className="w-16 mb-2"
            />

            <h2 className="text-3xl font-bold">
              {nextMatch.homeTeam}
            </h2>
          </div>

          <div className="text-cyan-400 text-4xl font-bold">
            VS
          </div>

          <div className="flex flex-col items-center">
            <img
              src={`https://flagcdn.com/${nextMatch.awayFlag}.svg`}
              alt={nextMatch.awayTeam}
              className="w-16 mb-2"
            />

            <h2 className="text-3xl font-bold">
              {nextMatch.awayTeam}
            </h2>
          </div>

        </div>

        <div className="text-slate-300 text-lg">
          {nextMatch.date}
        </div>

        <div className="text-slate-400">
          🕒 {nextMatch.time}
        </div>

        <div className="text-slate-400">
          📍 {nextMatch.city}
        </div>

      </div>

      {/* MATCHES */}

      <div className="flex flex-wrap gap-3 justify-center mb-8">

        {['ALL', 'A', 'B', 'C', 'D', 'E', 'F'].map((group) => (

          <button
            key={group}
            onClick={() => setSelectedGroup(group)}
            className={`
              px-5
              py-2
              rounded-xl
              font-semibold
              border
              transition-all
              duration-300
              ${
                selectedGroup === group
                  ? 'bg-cyan-500 text-black border-cyan-500'
                  : 'bg-slate-900 text-white border-slate-700 hover:border-cyan-500'
              }
            `}
          >
            {group}
          </button>

        ))}

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

        {filteredMatches.map((match, index) => (
          <MatchCard
            key={index}
            match={match}
          />
        ))}

      </div>

    </div>
  )
}

export default Matches