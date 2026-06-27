import { bracketLeft, bracketRight } from '../data/knockout'
import trophyImg from '../assets/trophy_cutout.png'
import { Link } from 'react-router-dom'


/* ─── Animated trophy center ──────────────────────────────────────── */
function TrophyCenter() {
  return (
    <div className="flex flex-col items-center justify-center px-4" style={{ minWidth: '170px' }}>

      {/* Spinning rings + real trophy photo */}
      <div className="relative flex items-center justify-center mb-4">

        {/* Outer spinning conic ring */}
        <div
          className="absolute rounded-full"
          style={{
            width: '158px',
            height: '158px',
            background: 'conic-gradient(from 0deg, transparent 0%, #fbbf24 20%, transparent 45%, #f59e0b 70%, transparent 100%)',
            animation: 'spin 5s linear infinite',
            opacity: 0.5,
          }}
        />
        {/* Inner counter-ring */}
        <div
          className="absolute rounded-full border border-yellow-400/20"
          style={{ width: '124px', height: '124px', animation: 'spin 9s linear infinite reverse' }}
        />

        {/* Real trophy image — float + glow pulse + subtle brightness */}
        <img
          src={trophyImg}
          alt="FIFA World Cup Trophy"
          className="relative z-10"
          style={{
            height: '148px',
            width: 'auto',
            objectFit: 'contain',
            animation: 'trophyFloat 3.5s ease-in-out infinite, glowPulse 3.5s ease-in-out infinite',
            filter: 'drop-shadow(0 0 14px rgba(251,191,36,0.65))',
          }}
        />
      </div>

      <div
        className="text-yellow-400 font-black text-xl tracking-[6px] mb-1"
        style={{ textShadow: '0 0 22px rgba(251,191,36,0.8)' }}
      >
        FINAL
      </div>
      <div className="text-slate-400 text-xs tracking-wider">19 JUL 2026</div>
      <div className="text-slate-500 text-xs">MetLife Stadium</div>
      <div className="text-slate-500 text-xs">New Jersey</div>
    </div>
  )
}

/* ─── TBD match slot ──────────────────────────────────────────────── */
function TBDSlot({ label }) {
  return (
    <div className="bracket-card bracket-tbd">
      <div className="text-xs text-yellow-500/60 font-bold tracking-widest mb-1">{label || 'TBD'}</div>
      <div className="text-slate-500 text-xs">To be determined</div>
    </div>
  )
}

/* ─── Match slot ──────────────────────────────────────────────────── */
function MatchSlot({ match }) {
  if (!match) return <TBDSlot />
  return (
    <div className={`bracket-card ${match.confirmed ? 'bracket-confirmed' : 'bracket-projected'}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-yellow-400 text-xs font-bold">{match.date}</span>
        <span className="text-slate-400 text-xs">{match.kickoff}</span>
      </div>
      <div className="flex items-center gap-2 mb-1">
        <img src={`https://flagcdn.com/20x15/${match.flag1}.png`} alt={match.team1} className="w-5 h-4 object-cover rounded-sm shadow" />
        <span className="text-white text-xs font-semibold leading-tight truncate">{match.team1}</span>
      </div>
      <div className="border-t border-slate-600/60 my-1" />
      <div className="flex items-center gap-2 mb-2">
        <img src={`https://flagcdn.com/20x15/${match.flag2}.png`} alt={match.team2} className="w-5 h-4 object-cover rounded-sm shadow" />
        <span className="text-white text-xs font-semibold leading-tight truncate">{match.team2}</span>
      </div>
      <div className="text-slate-500 text-[10px] truncate">📍 {match.venue}</div>
      {match.confirmed ? (
        <div className="mt-1.5">
          <span className="text-[9px] bg-green-500/20 text-green-400 border border-green-500/30 rounded px-1.5 py-0.5 font-bold tracking-wider">CONFIRMED</span>
        </div>
      ) : (
        <div className="mt-1.5">
          <span className="text-[9px] bg-yellow-500/10 text-yellow-500/70 border border-yellow-500/20 rounded px-1.5 py-0.5 font-bold tracking-wider">PROJECTED</span>
        </div>
      )}
    </div>
  )
}

/* ─── Bracket pair ────────────────────────────────────────────────── */
function MatchPair({ match1, match2, side }) {
  return (
    <div className={`bracket-pair bracket-pair--${side}`}>
      <div className="bracket-pair__item"><MatchSlot match={match1} /></div>
      <div className="bracket-pair__item"><MatchSlot match={match2} /></div>
    </div>
  )
}

/* ─── Main page ───────────────────────────────────────────────────── */
function Knockout() {
  const leftPairs = [
    [bracketLeft[0], bracketLeft[1]],
    [bracketLeft[2], bracketLeft[3]],
    [bracketLeft[4], bracketLeft[5]],
    [bracketLeft[6], bracketLeft[7]],
  ]
  const rightPairs = [
    [bracketRight[0], bracketRight[1]],
    [bracketRight[2], bracketRight[3]],
    [bracketRight[4], bracketRight[5]],
    [bracketRight[6], bracketRight[7]],
  ]

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' }}>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes trophyFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%      { transform: translateY(-10px) scale(1.04); }
        }
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(251,191,36,0.5)) brightness(1); }
          50%      { filter: drop-shadow(0 0 26px rgba(251,191,36,0.9)) brightness(1.1); }
        }
        @keyframes pulseGold {
          0%, 100% { box-shadow: 0 0 0 0 rgba(251,191,36,0.2); }
          50%      { box-shadow: 0 0 14px 4px rgba(251,191,36,0.1); }
        }

        .bracket-card {
          width: 148px;
          background: rgba(15,20,40,0.88);
          border: 1px solid rgba(251,191,36,0.25);
          border-radius: 10px;
          padding: 8px 10px;
          backdrop-filter: blur(8px);
          flex-shrink: 0;
        }
        .bracket-confirmed  { border-color: rgba(251,191,36,0.6); animation: pulseGold 3s ease-in-out infinite; }
        .bracket-projected  { border-color: rgba(100,100,140,0.4); }
        .bracket-tbd {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          height: 88px; border-style: dashed;
          border-color: rgba(100,100,140,0.3); opacity: 0.6;
        }

        .bracket-pair { display: flex; flex-direction: column; gap: 6px; position: relative; }
        .bracket-pair__item { display: flex; align-items: center; }

        .bracket-pair--left .bracket-pair__item:first-child::after,
        .bracket-pair--left .bracket-pair__item:last-child::after {
          content: ''; width: 12px; border-top: 2px solid rgba(251,191,36,0.4); flex-shrink: 0;
        }
        .bracket-pair--left::after {
          content: ''; position: absolute; right: -12px; top: 50%; transform: translateY(-50%);
          width: 0; height: calc(50% + 3px); border-right: 2px solid rgba(251,191,36,0.4);
        }
        .bracket-pair--right .bracket-pair__item:first-child::before,
        .bracket-pair--right .bracket-pair__item:last-child::before {
          content: ''; width: 12px; border-top: 2px solid rgba(251,191,36,0.4); flex-shrink: 0;
        }
        .bracket-pair--right::before {
          content: ''; position: absolute; left: -12px; top: 50%; transform: translateY(-50%);
          width: 0; height: calc(50% + 3px); border-left: 2px solid rgba(251,191,36,0.4);
        }

        .tbd-col { display: flex; flex-direction: column; justify-content: space-around; }
        .tbd-col-item { display: flex; align-items: center; }
        .tbd-col--left  .tbd-col-item::before { content: ''; width: 16px; border-top: 2px solid rgba(251,191,36,0.25); flex-shrink: 0; }
        .tbd-col--left  .tbd-col-item::after  { content: ''; width: 12px; border-top: 2px solid rgba(251,191,36,0.2);  flex-shrink: 0; }
        .tbd-col--right .tbd-col-item::before { content: ''; width: 12px; border-top: 2px solid rgba(251,191,36,0.2);  flex-shrink: 0; }
        .tbd-col--right .tbd-col-item::after  { content: ''; width: 16px; border-top: 2px solid rgba(251,191,36,0.25); flex-shrink: 0; }

        .final-slot { display: flex; flex-direction: column; align-items: center; gap: 6px; }
        .final-slot-item { display: flex; align-items: center; gap: 4px; }
        .final-slot-item::before { content: ''; width: 12px; border-top: 2px solid rgba(251,191,36,0.3); flex-shrink: 0; }
        .final-slot-item::after  { content: ''; width: 12px; border-top: 2px solid rgba(251,191,36,0.3); flex-shrink: 0; }

        .bracket-scroll-wrap {
          overflow-x: auto; overflow-y: visible; padding-bottom: 12px;
          scrollbar-width: thin; scrollbar-color: rgba(251,191,36,0.4) rgba(255,255,255,0.05);
        }
        .bracket-scroll-wrap::-webkit-scrollbar { height: 6px; }
        .bracket-scroll-wrap::-webkit-scrollbar-track { background: rgba(255,255,255,0.04); border-radius: 3px; }
        .bracket-scroll-wrap::-webkit-scrollbar-thumb { background: rgba(251,191,36,0.4); border-radius: 3px; }

        /* Centering wrapper — text-align:center + inline-flex child
           is the only approach that centers AND keeps left-edge
           accessible when scrolling on narrow screens */
        .bracket-sizer {
          text-align: center;
          white-space: nowrap;
        }
        .bracket-inner {
          display: inline-flex;
          align-items: center;
          text-align: left;
          gap: 0;
          padding: 0 48px 48px;
        }

        /* ── Responsive zoom ───────────────────────────────────────
           El bracket mide ~1538px. zoom lo encoge proporcionalmente
           (cards, trofeo y líneas escalan juntos).
           En monitor ≥ 1650px: tamaño completo (sin zoom).
           En laptop 1440px: 88% → queda en ~1353px, cabe sin scroll.
           En laptop 1280px: 80% → ~1230px, cabe holgado.
           ────────────────────────────────────────────────────────── */
        @media (max-width: 1650px) { .bracket-inner { zoom: 0.94; } }
        @media (max-width: 1500px) { .bracket-inner { zoom: 0.88; } }
        @media (max-width: 1360px) { .bracket-inner { zoom: 0.82; } }
        @media (max-width: 1200px) { .bracket-inner { zoom: 0.74; } }
        @media (max-width: 1050px) { .bracket-inner { zoom: 0.65; } }
        @media (max-width:  880px) { .bracket-inner { zoom: 0.56; } }
      `}</style>

      {/* HEADER */}
      <div className="text-center pt-10 pb-6 px-4">
        <Link to="/" className="block text-center no-underline group cursor-pointer mb-2">
          <div className="text-yellow-400/70 text-xs tracking-[8px] font-bold mb-2">FIFA WORLD CUP 2026™</div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-wide group-hover:text-yellow-400/60 transition-colors" style={{ textShadow: '0 0 30px rgba(251,191,36,0.3)' }}>
            KNOCKOUT STAGE
          </h1>
        </Link>
        <div className="flex justify-center gap-6 mt-5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-yellow-400/60 border border-yellow-400" />
            <span className="text-slate-400 text-xs">Confirmed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ border: '1px dashed rgba(100,100,140,0.6)', background: 'rgba(100,100,100,0.2)' }} />
            <span className="text-slate-400 text-xs">Projected</span>
          </div>
        </div>
      </div>

      {/* ROUND LABELS (wide screens only) */}
      <div className="hidden lg:flex justify-center items-end pb-3" style={{ zoom: 'inherit' }}>
        {['Round of 16', 'Quarters', 'Semis', 'FINAL', 'Semis', 'Quarters', 'Round of 16'].map((label, i) => (
          <div key={i} className={`text-center text-xs tracking-widest font-bold flex-1 ${label === 'FINAL' ? 'text-yellow-400 text-sm' : 'text-slate-500'}`}
            style={label === 'FINAL' ? { textShadow: '0 0 10px rgba(251,191,36,0.5)' } : {}}>
            {label}
          </div>
        ))}
      </div>

      {/* MOBILE SCROLL HINT */}
      <p className="text-center text-slate-600 text-xs pb-2 lg:hidden">← Scroll to see full bracket →</p>

      {/* BRACKET */}
      <div className="bracket-scroll-wrap">
        <div className="bracket-sizer">
        <div className="bracket-inner">

          {/* R16 LEFT */}
          <div className="flex flex-col justify-around gap-4" style={{ height: '700px' }}>
            {leftPairs.map(([m1, m2], i) => <MatchPair key={i} match1={m1} match2={m2} side="left" />)}
          </div>

          {/* QF LEFT */}
          <div className="tbd-col tbd-col--left" style={{ height: '700px' }}>
            {[1, 2].map(i => <div key={i} className="tbd-col-item"><TBDSlot label={`QF L${i}`} /></div>)}
          </div>

          {/* SF LEFT */}
          <div className="tbd-col tbd-col--left" style={{ height: '700px' }}>
            <div className="tbd-col-item"><TBDSlot label="SEMI L" /></div>
          </div>

          {/* FINALIST LEFT */}
          <div className="final-slot" style={{ height: '700px', justifyContent: 'center' }}>
            <div className="final-slot-item"><TBDSlot label="FINALIST" /></div>
          </div>

          {/* TROPHY */}
          <TrophyCenter />

          {/* FINALIST RIGHT */}
          <div className="final-slot" style={{ height: '700px', justifyContent: 'center' }}>
            <div className="final-slot-item"><TBDSlot label="FINALIST" /></div>
          </div>

          {/* SF RIGHT */}
          <div className="tbd-col tbd-col--right" style={{ height: '700px' }}>
            <div className="tbd-col-item"><TBDSlot label="SEMI R" /></div>
          </div>

          {/* QF RIGHT */}
          <div className="tbd-col tbd-col--right" style={{ height: '700px' }}>
            {[1, 2].map(i => <div key={i} className="tbd-col-item"><TBDSlot label={`QF R${i}`} /></div>)}
          </div>

          {/* R16 RIGHT */}
          <div className="flex flex-col justify-around gap-4" style={{ height: '700px' }}>
            {rightPairs.map(([m1, m2], i) => <MatchPair key={i} match1={m1} match2={m2} side="right" />)}
          </div>

        </div>
        </div>
      </div>

      {/* SCHEDULE TABLE */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-center text-yellow-400 font-bold tracking-[4px] text-sm mb-6">
          SCHEDULE · ROUND OF 16
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[...bracketLeft, ...bracketRight].map((match) => (
            <div key={match.id} className={`flex items-center gap-3 rounded-xl px-4 py-3 border transition-all ${
              match.confirmed
                ? 'bg-yellow-400/5 border-yellow-400/30 hover:border-yellow-400/60'
                : 'bg-slate-900/40 border-slate-700/40 hover:border-slate-600'
            }`}>
              <div className={`text-xs font-black w-6 shrink-0 text-center ${match.confirmed ? 'text-yellow-400' : 'text-slate-500'}`}>{match.id}</div>
              <div className="flex items-center gap-1.5 flex-1 min-w-0">
                <img src={`https://flagcdn.com/20x15/${match.flag1}.png`} alt={match.team1} className="w-5 h-4 object-cover rounded-sm" />
                <span className="text-white text-sm font-semibold truncate">{match.team1}</span>
                <span className="text-slate-500 text-xs shrink-0">vs</span>
                <img src={`https://flagcdn.com/20x15/${match.flag2}.png`} alt={match.team2} className="w-5 h-4 object-cover rounded-sm" />
                <span className="text-white text-sm font-semibold truncate">{match.team2}</span>
              </div>
              <div className="text-right shrink-0">
                <div className="text-yellow-400 text-xs font-bold">{match.date}</div>
                <div className="text-slate-400 text-xs">{match.kickoff} ET</div>
              </div>
              <div className="text-slate-500 text-[10px] shrink-0 hidden md:block">📍 {match.venue}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-600 text-xs mt-8">
          Projected matchups subject to final group stage results (Jun 26–27). Source: CBS Sports · ESPN · FIFA.com
        </p>
      </div>

    </div>
  )
}

export default Knockout
