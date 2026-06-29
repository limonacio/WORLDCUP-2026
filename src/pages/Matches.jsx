import { useState } from 'react'
import { Link } from 'react-router-dom'
import { matches } from '../data/matches'
import { results } from '../data/results'
import { bracketLeft, bracketRight } from '../data/knockout'
import MatchCard from '../components/MatchCard'

// ── Build results lookup ────────────────────────────────────────────────────
const resultsMap = {}
results.forEach((r) => {
  resultsMap[`${r.home}|${r.away}`] = {
    homeGoals: r.homeGoals,
    awayGoals: r.awayGoals,
  }
})

// ── Enrich matches with real scores where available ─────────────────────────
const enrichedMatches = matches.map((match) => {
  const result = resultsMap[`${match.home}|${match.away}`]
  if (result) {
    return { ...match, homeScore: result.homeGoals, awayScore: result.awayGoals, status: 'FT' }
  }
  return { ...match, status: 'Scheduled' }
})

// ── Flag helper ─────────────────────────────────────────────────────────────
const flagUrl = (code, size = 40) =>
  code ? `https://flagcdn.com/w${size}/${code}.png` : ''

// ── isPast: FT in results OR datetime already passed ────────────────────────
const now = new Date()
const isPast = (m) => m.status === 'FT' || new Date(m.datetime) < now

// ── All knockout matches sorted by datetime ─────────────────────────────────
const allKnockout = [...bracketLeft, ...bracketRight].sort(
  (a, b) => new Date(a.datetime) - new Date(b.datetime)
)
const nextKnockout = allKnockout.find((m) => !m.confirmed && new Date(m.datetime) > now)
  || allKnockout.find((m) => !m.confirmed)

// ─────────────────────────────────────────────────────────────────────────────
function Matches() {
  const [selectedGroup, setSelectedGroup] = useState('ALL')
  const [search, setSearch] = useState('')

  // ── Filtering ─────────────────────────────────────────────────────────────
  const filteredMatches = enrichedMatches.filter((match) => {
    const groupOk = selectedGroup === 'ALL' ? true : match.group === selectedGroup
    const searchOk =
      search === ''
        ? true
        : match.home.toLowerCase().includes(search.toLowerCase()) ||
          match.away.toLowerCase().includes(search.toLowerCase())
    return groupOk && searchOk
  })

  // ── Group stage status ────────────────────────────────────────────────────
  const groupStageOver = enrichedMatches.every((m) => isPast(m))
  const nextGroupMatch = enrichedMatches.find((m) => !isPast(m))

  // ── Group by date ─────────────────────────────────────────────────────────
  const matchesByDate = filteredMatches.reduce((acc, match) => {
    if (!acc[match.date]) acc[match.date] = []
    acc[match.date].push(match)
    return acc
  }, {})

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="p-10">

      {/* PAGE TITLE */}
      <Link to="/" className="block text-center no-underline group cursor-pointer mb-10">
        <div className="text-yellow-400/70 text-xs tracking-[8px] font-bold mb-2">
          FIFA WORLD CUP 2026™
        </div>
        <h1 className="text-5xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
          FIXTURES
        </h1>
      </Link>

      {/* ── NEXT MATCH ───────────────────────────────────────────────────── */}
      {groupStageOver ? (
        /* Group stage complete → show next knockout match */
        nextKnockout ? (
          <Link
            to="/knockout"
            className="
              block no-underline mb-10
              bg-slate-900/70
              border border-yellow-500/30
              rounded-2xl p-8
              backdrop-blur-sm
              shadow-lg shadow-yellow-500/10
              text-center
              hover:border-yellow-400
              hover:shadow-yellow-500/20
              transition-all duration-300
            "
          >
            <div className="text-yellow-400 text-sm font-bold tracking-[3px] mb-1">
              🏆 KNOCKOUT STAGE
            </div>
            <div className="text-yellow-400/60 text-xs tracking-wider mb-4">
              NEXT MATCH · {nextKnockout.id}
            </div>

            <div className="flex justify-center items-center gap-8 mb-6">
              <div className="flex flex-col items-center">
                <img
                  src={flagUrl(nextKnockout.flag1, 80)}
                  alt={nextKnockout.team1}
                  className="h-14 mb-3 rounded shadow-md"
                />
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {nextKnockout.team1}
                </h2>
              </div>

              <div className="text-yellow-400 text-4xl font-bold">VS</div>

              <div className="flex flex-col items-center">
                <img
                  src={flagUrl(nextKnockout.flag2, 80)}
                  alt={nextKnockout.team2}
                  className="h-14 mb-3 rounded shadow-md"
                />
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {nextKnockout.team2}
                </h2>
              </div>
            </div>

            <div className="text-slate-300 text-lg">{nextKnockout.date} 2026</div>
            <div className="text-slate-400">🕒 {nextKnockout.kickoffArgentina}</div>
            <div className="text-slate-400">📍 {nextKnockout.venue}</div>
            <div className="text-yellow-400/50 text-sm mt-3">
              View full bracket →
            </div>
          </Link>
        ) : null
      ) : (
        /* Group stage in progress → show next group match */
        nextGroupMatch && (
          <div
            className="
              mb-10
              bg-slate-900/70
              border border-cyan-500/30
              rounded-2xl p-8
              backdrop-blur-sm
              shadow-lg shadow-cyan-500/10
              text-center
            "
          >
            <div className="text-cyan-400 text-sm font-bold tracking-[3px] mb-4">
              NEXT MATCH
            </div>

            <div className="flex justify-center items-center gap-8 mb-6">
              <div className="flex flex-col items-center">
                <img
                  src={flagUrl(nextGroupMatch.homeFlag, 80)}
                  alt={nextGroupMatch.home}
                  className="h-14 mb-3 rounded shadow-md"
                />
                <h2 className="text-2xl md:text-3xl font-bold">
                  {nextGroupMatch.home}
                </h2>
              </div>
              <div className="text-cyan-400 text-4xl font-bold">VS</div>
              <div className="flex flex-col items-center">
                <img
                  src={flagUrl(nextGroupMatch.awayFlag, 80)}
                  alt={nextGroupMatch.away}
                  className="h-14 mb-3 rounded shadow-md"
                />
                <h2 className="text-2xl md:text-3xl font-bold">
                  {nextGroupMatch.away}
                </h2>
              </div>
            </div>

            <div className="text-slate-300 text-lg">{nextGroupMatch.date}</div>
            <div className="text-slate-400">🕒 {nextGroupMatch.kickoffArgentina}</div>
            <div className="text-slate-400">📍 {nextGroupMatch.city}</div>
            {nextGroupMatch.stadium && (
              <div className="text-slate-500 text-sm mt-1">{nextGroupMatch.stadium}</div>
            )}
          </div>
        )
      )}

      {/* ── SEARCH ──────────────────────────────────────────────────────── */}
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search team..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full bg-slate-900/70
            border border-cyan-500/30
            rounded-xl px-5 py-3
            text-white outline-none
            focus:border-cyan-400
          "
        />
      </div>

      {/* ── GROUP FILTERS ────────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {['ALL', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((group) => (
          <button
            key={group}
            onClick={() => setSelectedGroup(group)}
            className={`
              px-5 py-2 rounded-xl font-semibold border transition-all duration-300
              ${selectedGroup === group
                ? 'bg-cyan-500 text-black border-cyan-500'
                : 'bg-slate-900 text-white border-slate-700 hover:border-cyan-500'
              }
            `}
          >
            {group}
          </button>
        ))}
      </div>

      {/* ── MATCHES BY DATE ─────────────────────────────────────────────── */}
      <div className="space-y-12">
        {Object.entries(matchesByDate).map(([date, dateMatches]) => (
          <div key={date}>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-cyan-400 text-3xl font-bold">{date}</div>
              <div className="flex-1 h-px bg-cyan-500/20" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {dateMatches.map((match, index) => (
                <MatchCard key={index} match={match} />
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Matches
