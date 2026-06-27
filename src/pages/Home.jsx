import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import trophyImg from '../assets/trophy_cutout.png'
import { useEffect, useState } from 'react'
import { matches } from '../data/matches'
import { results } from '../data/results'

const resultsMap = {}
results.forEach((r) => {
  resultsMap[`${r.home}|${r.away}`] = { homeGoals: r.homeGoals, awayGoals: r.awayGoals }
})
const enrichedMatches = matches.map((match) => {
  const result = resultsMap[`${match.home}|${match.away}`]
  if (result) return { ...match, homeScore: result.homeGoals, awayScore: result.awayGoals, status: 'FT' }
  return { ...match }
})

function Home() {

  // ── 1. Primero los datos ──────────────────────────────
  const now = new Date()

  const isPast = (match) =>
    match.status === 'FT' || new Date(match.datetime) < now

  const nextMatch =
    enrichedMatches.find((m) => !isPast(m)) ||
    enrichedMatches[enrichedMatches.length - 1]

  const targetDate = new Date(nextMatch.datetime)

  const nextIndex = enrichedMatches.findIndex((m) => !isPast(m))

  const upcomingMatches =
    nextIndex >= 0
      ? enrichedMatches
          .slice(nextIndex + 1, nextIndex + 7)
          .filter((m) => !isPast(m))
          .slice(0, 3)
      : []

  // ── 2. Después el countdown (targetDate ya existe) ────
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date()
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => {
      clearInterval(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className="relative min-h-screen flex flex-col text-white overflow-hidden"
      style={{ backgroundColor: '#07111f' }}
    >
      <style>{`
        @keyframes trophyFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-12px) scale(1.03); }
        }
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 12px rgba(251,191,36,0.5)) brightness(1); }
          50%       { filter: drop-shadow(0 0 30px rgba(251,191,36,0.9)) brightness(1.12); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* Halo de fondo */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-[120px] opacity-20 pointer-events-none top-0 left-1/2"
        style={{
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(6,182,212,0.45) 0%, rgba(6,182,212,0.15) 35%, transparent 70%)',
        }}
      />

      {/* Logo de fondo parallax */}
      <img
        src={logo}
        alt=""
        className="absolute max-w-[90vw] opacity-[0.06] pointer-events-none select-none"
        style={{
          width: '900px',
          left: '50%',
          transform: `translateX(-50%) translateY(${-60 + scrollY * 0.7}px)`,
        }}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 px-8 pt-10 pb-6 max-w-6xl mx-auto w-full min-h-[85vh]">

        {/* IZQUIERDA: texto + botones */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
          <div className="text-yellow-400/70 text-xs tracking-[8px] font-bold mb-3">
            FIFA WORLD CUP 2026™
          </div>

          <h1
            className="text-5xl md:text-7xl font-black text-white mb-3 leading-tight"
            style={{ textShadow: '0 0 40px rgba(56,189,248,0.2)' }}
          >
            THE WORLD<br />IS WATCHING
          </h1>

          <p className="text-slate-400 text-base mb-8 max-w-xs">
            48 teams · 3 countries · 1 champion
          </p>

          {/* Stats */}
          <div className="flex gap-3 mb-10 flex-wrap justify-center lg:justify-start">
            {[
              { val: '48', label: 'Teams' },
              { val: '104', label: 'Matches' },
              { val: '16', label: 'Venues' },
              { val: '3', label: 'Countries' },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-slate-800/60 border border-cyan-500/20 rounded-xl px-4 py-2 text-center"
              >
                <div className="text-cyan-400 font-black text-xl">{s.val}</div>
                <div className="text-slate-400 text-xs">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Botones */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <Link
              to="/matches"
              className="bg-slate-900/60 backdrop-blur-sm text-white px-8 py-4 text-base rounded-xl font-bold border border-slate-700 transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Matches
            </Link>
            <Link
              to="/standings"
              className="bg-slate-900/60 backdrop-blur-sm text-white px-8 py-4 text-base rounded-xl font-bold border border-slate-700 transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Standings
            </Link>
            <Link
              to="/knockout"
              className="px-8 py-4 text-base rounded-xl font-bold border-2 border-yellow-500/60 text-yellow-300 transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20"
              style={{ background: 'linear-gradient(135deg, rgba(20,14,0,0.7) 0%, rgba(40,30,0,0.7) 100%)' }}
            >
              🏆 Bracket
            </Link>
          </div>
        </div>

        {/* DERECHA: copa animada */}
        <div className="relative flex items-center justify-center flex-shrink-0">
          <div
            className="absolute rounded-full"
            style={{
              width: '280px', height: '280px',
              background: 'conic-gradient(from 0deg, transparent 0%, #fbbf24 20%, transparent 45%, #f59e0b 70%, transparent 100%)',
              animation: 'spin 6s linear infinite',
              opacity: 0.22,
            }}
          />
          <div
            className="absolute rounded-full border border-yellow-400/15"
            style={{ width: '210px', height: '210px', animation: 'spin 10s linear infinite reverse' }}
          />
          <div
            className="absolute rounded-full"
            style={{ width: '180px', height: '180px', background: 'radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 70%)' }}
          />
          <img
            src={trophyImg}
            alt="FIFA World Cup Trophy"
            className="relative z-10"
            style={{
              height: '340px',
              width: 'auto',
              objectFit: 'contain',
              animation: 'trophyFloat 3.5s ease-in-out infinite, glowPulse 3.5s ease-in-out infinite',
              filter: 'drop-shadow(0 0 20px rgba(251,191,36,0.6))',
            }}
          />
        </div>
      </div>

      {/* ── NEXT MATCH ───────────────────────────────────── */}
      <div className="relative z-10 px-5 max-w-2xl mx-auto w-full mb-20">
        <div className="text-cyan-400 text-sm font-bold tracking-[3px] mb-4 text-center">
          NEXT MATCH
        </div>
        <div className="bg-slate-900/70 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm shadow-lg shadow-cyan-500/10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
            <div className="flex flex-col items-center">
              <img src={`https://flagcdn.com/${nextMatch.homeFlag}.svg`} alt={nextMatch.home} className="w-16 mb-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-center">{nextMatch.home}</h2>
            </div>
            <div className="text-cyan-400 text-4xl md:text-5xl font-bold">VS</div>
            <div className="flex flex-col items-center">
              <img src={`https://flagcdn.com/${nextMatch.awayFlag}.svg`} alt={nextMatch.away} className="w-16 mb-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-center">{nextMatch.away}</h2>
            </div>
          </div>

          <div className="text-slate-300 text-lg text-center">{nextMatch.date}</div>
          <div className="text-cyan-400 font-semibold mt-2 text-center">🕒 {nextMatch.kickoffArgentina}</div>
          <div className="text-slate-400 mt-1 text-center mb-6">📍 {nextMatch.city}</div>

          {/* Countdown */}
          <div className="flex justify-center gap-8">
            {[['days', 'DAYS'], ['hours', 'HRS'], ['minutes', 'MIN'], ['seconds', 'SEC']].map(([key, label]) => (
              <div key={key} className="text-center">
                <div className="text-cyan-400 text-3xl font-bold">{timeLeft[key]}</div>
                <div className="text-xs text-slate-400 tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── UPCOMING MATCHES ─────────────────────────────── */}
      {upcomingMatches.length > 0 && (
        <div className="relative z-10 px-5 max-w-5xl mx-auto w-full mb-16">
          <div className="text-cyan-400 text-sm font-bold tracking-[3px] mb-6 text-center">
            UPCOMING MATCHES
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingMatches.map((match, index) => (
              <div
                key={index}
                className="bg-slate-900/70 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1"
              >
                <div className="flex justify-between items-center mb-4">
  <div className="text-slate-400 text-sm">{match.date}</div>
  <div className="text-slate-400 text-sm">🕒 {match.kickoffArgentina}</div>
</div>
                <div className="flex items-center justify-center gap-4">
                  <div className="flex flex-col items-center">
                    <img src={`https://flagcdn.com/${match.homeFlag}.svg`} alt={match.home} className="w-10 mb-2" />
                    <span className="text-slate-300 text-xs font-semibold text-center">{match.home}</span>
                  </div>
                  <div className="text-cyan-400 text-xl font-bold">VS</div>
                  <div className="flex flex-col items-center">
                    <img src={`https://flagcdn.com/${match.awayFlag}.svg`} alt={match.away} className="w-10 mb-2" />
                    <span className="text-slate-300 text-xs font-semibold text-center">{match.away}</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-slate-400 text-xs mt-1">📍 {match.city}</div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      )}

      {/* ── FEATURED TEAMS ───────────────────────────────── */}
      <div className="relative z-10 px-5 max-w-6xl mx-auto w-full mb-20">
        <div className="text-cyan-400 text-sm font-bold tracking-[3px] mb-8 text-center">
          FEATURED TEAMS
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { flag: 'ar', name: 'Argentina', desc: 'World Champion' },
            { flag: 'br', name: 'Brazil', desc: '5 World Cups' },
            { flag: 'fr', name: 'France', desc: '2022 Runner-up' },
            { flag: 'es', name: 'Spain', desc: 'Top Contender' },
          ].map((team) => (
            <div
              key={team.flag}
              className="bg-slate-900/70 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 text-center"
            >
              <img src={`https://flagcdn.com/${team.flag}.svg`} alt={team.name} className="w-14 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-1">{team.name}</h3>
              <p className="text-cyan-400 text-sm">{team.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home