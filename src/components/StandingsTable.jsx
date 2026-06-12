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

      <div
        className="
          grid
          grid-cols-[50px_1fr_60px_60px_60px_60px_60px_60px_60px]
          text-slate-400
          text-xs
          font-bold
          mb-3
        "
      >
        <div>POS</div>
        <div>TEAM</div>
        <div>PTS</div>
        <div>PJ</div>
        <div>PG</div>
        <div>PE</div>
        <div>PP</div>
        <div>GF</div>
        <div>DG</div>
      </div>

      {group.teams.map((team, index) => (
        <div
          key={team.name}
          className="
            grid
            grid-cols-[50px_1fr_60px_60px_60px_60px_60px_60px_60px]
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

          <div className="flex items-center gap-3">
            <img
              src={`https://flagcdn.com/${team.code}.svg`}
              alt={team.name}
              className="w-8"
            />

            <span className="font-semibold">
              {team.name}
            </span>
          </div>

          <div>{team.points}</div>
          <div>{team.played}</div>
          <div>{team.won}</div>
          <div>{team.draw}</div>
          <div>{team.lost}</div>
          <div>{team.gf}</div>
          <div>{team.diff}</div>
        </div>
      ))}
    </div>
  )
}

export default StandingsTable