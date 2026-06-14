function StandingsTable({ group }) {
  return (
    <div
      className="
        bg-slate-900/70
        border
        border-cyan-500/30
        rounded-2xl
        p-6
      "
    >
      <h2 className="text-cyan-400 text-4xl font-bold mb-6">
        Group {group.group}
      </h2>

      {/* CABECERA */}
      <div
        className="
          grid
          grid-cols-[50px_1fr_50px]
          md:grid-cols-[50px_1fr_60px_60px_60px_60px_60px_60px_60px]
          text-slate-400
          text-xs
          font-bold
          mb-3
        "
      >
        <div>POS</div>
        <div>TEAM</div>
        <div>PTS</div>

        <div className="hidden md:block">PJ</div>
        <div className="hidden md:block">PG</div>
        <div className="hidden md:block">PE</div>
        <div className="hidden md:block">PP</div>
        <div className="hidden md:block">GF</div>
        <div className="hidden md:block">DG</div>
      </div>

      {group.teams.map((team, index) => (
        <div
          key={team.name}
          className="
            grid
            grid-cols-[50px_1fr_50px]
            md:grid-cols-[50px_1fr_60px_60px_60px_60px_60px_60px_60px]
            items-center
            bg-slate-800/50
            rounded-xl
            p-3
            mb-2
          "
        >
          <div
            className={`
              w-8
              h-8
              rounded-full
              flex
              items-center
              justify-center
              font-bold
              ${
                index === 0
                  ? 'bg-yellow-500 text-black'
                  : index === 1
                  ? 'bg-slate-300 text-black'
                  : 'bg-slate-700 text-white'
              }
            `}
          >
            {index + 1}
          </div>

          <div className="flex items-center gap-3 min-w-0">
            <img
              src={`https://flagcdn.com/${team.code}.svg`}
              alt={team.name}
              className="w-8 flex-shrink-0"
            />

            <span
              className="
                font-semibold
                truncate
              "
            >
              {team.name}
            </span>
          </div>

          <div>{team.points}</div>

          <div className="hidden md:block">{team.played}</div>
          <div className="hidden md:block">{team.won}</div>
          <div className="hidden md:block">{team.draw}</div>
          <div className="hidden md:block">{team.lost}</div>
          <div className="hidden md:block">{team.gf}</div>
          <div className="hidden md:block">{team.diff}</div>
        </div>
      ))}
    </div>
  )
}

export default StandingsTable