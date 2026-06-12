function GroupPreview({ group, matches }) {
  const groupMatches = matches
    .filter(match => match.group === group.group)
    .slice(0, 2)

  return (
    <div
      className="
        bg-slate-900/70
        border
        border-cyan-500/30
        rounded-2xl
        p-6
        backdrop-blur-sm
      "
    >
      <h2 className="text-cyan-400 text-4xl font-bold mb-6">
        Group {group.group}
      </h2>

      <div className="space-y-3 mb-8">

        {group.teams.map(team => (

          <div
            key={team.name}
            className="
              flex
              items-center
              gap-4
              bg-slate-800/40
              rounded-xl
              p-3
            "
          >
            <img
              src={`https://flagcdn.com/${team.code}.svg`}
              alt={team.name}
              className="w-10"
            />

            <span className="text-lg font-semibold">
              {team.name}
            </span>

          </div>

        ))}

      </div>

      <div
        className="
          border-t
          border-slate-700
          pt-5
        "
      >

        <div
          className="
            text-cyan-400
            text-sm
            font-bold
            tracking-[3px]
            mb-4
          "
        >
          UPCOMING MATCHES
        </div>

        <div className="space-y-3">

          {groupMatches.map((match, index) => (

            <div
              key={index}
              className="
                bg-slate-800/40
                rounded-lg
                p-3
                text-slate-300
              "
            >
              <div className="font-semibold">
                {match.home} vs {match.away}
              </div>

              <div className="text-sm text-slate-500">
                {match.date}
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default GroupPreview