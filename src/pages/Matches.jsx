import { useState } from 'react'
import { matches } from '../data/matches'
import MatchCard from '../components/MatchCard'
import { Link } from 'react-router-dom'

function Matches() {
  const [selectedGroup, setSelectedGroup] = useState('ALL')
  const [search, setSearch] = useState('')

  const filteredMatches = matches.filter((match) => {
    const matchesGroup =
      selectedGroup === 'ALL'
        ? true
        : match.group === selectedGroup

    const matchesSearch =
      search === ''
        ? true
        : match.home.toLowerCase().includes(search.toLowerCase()) ||
          match.away.toLowerCase().includes(search.toLowerCase())

    return matchesGroup && matchesSearch
  })

  const nextMatch = matches[0]

  const matchesByDate = filteredMatches.reduce((acc, match) => {
    if (!acc[match.date]) {
      acc[match.date] = []
    }

    acc[match.date].push(match)

    return acc
  }, {})

  return (
    <div className="p-6">

      <Link to="/" className="block text-center mb-10 no-underline group cursor-pointer">
  <div className="text-yellow-400/70 text-xs tracking-[8px] font-bold mb-1">FIFA WORLD CUP 2026™</div>
  <h1 className="text-4xl md:text-5xl font-black text-white tracking-wide group-hover:text-yellow-400/60 transition-colors">
    FIXTURES
  </h1>
</Link>
      

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
              alt={nextMatch.home}
              className="w-16 mb-2"
            />

            <h2 className="text-3xl font-bold">
              {nextMatch.home}
            </h2>
          </div>

          <div className="text-cyan-400 text-4xl font-bold">
            VS
          </div>

          <div className="flex flex-col items-center">
            <img
              src={`https://flagcdn.com/${nextMatch.awayFlag}.svg`}
              alt={nextMatch.away}
              className="w-16 mb-2"
            />

            <h2 className="text-3xl font-bold">
              {nextMatch.away}
            </h2>
          </div>

        </div>

        <div className="text-slate-300 text-lg">
          {nextMatch.date}
        </div>

        <div className="text-slate-400">
          🕒 {nextMatch.kickoffArgentina}
        </div>

        <div className="text-slate-400">
          📍 {nextMatch.city}
        </div>

      </div>

      {/* SEARCH */}

      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search team..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            bg-slate-900/70
            border
            border-cyan-500/30
            rounded-xl
            px-5
            py-3
            text-white
            outline-none
            focus:border-cyan-400
          "
        />
      </div>

      {/* FILTERS */}

      <div className="flex flex-wrap gap-3 justify-center mb-8">

        {['ALL', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((group) => (

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

      {/* MATCHES BY DATE */}

      <div className="space-y-12">

        {Object.entries(matchesByDate).map(([date, dateMatches]) => (

          <div key={date}>

            <div
              className="
                flex
                items-center
                gap-4
                mb-6
              "
            >
              <div className="text-cyan-400 text-3xl font-bold">
                {date}
              </div>

              <div className="flex-1 h-px bg-cyan-500/20"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

              {dateMatches.map((match, index) => (

                <MatchCard
                  key={index}
                  match={match}
                />

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Matches