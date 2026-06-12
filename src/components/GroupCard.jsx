function GroupCard({ group }) {
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

      <div className="space-y-4">

        {group.teams.map((team) => (

          <div
            key={team.name}
            className="
              flex
              items-center
              gap-4
              bg-slate-800/50
              rounded-xl
              p-4
            "
          >

            <img
              src={`https://flagcdn.com/${team.code}.svg`}
              alt={team.name}
              className="w-10"
            />

            <span className="text-xl font-semibold">
              {team.name}
            </span>

          </div>

        ))}

      </div>

      {/* HOST CITIES */}

      <div className="border-t border-slate-700 mt-8 pt-5">

        <div
          className="
            text-cyan-400
            text-sm
            font-bold
            tracking-[2px]
            mb-4
          "
        >
          HOST CITIES
        </div>

        <div className="space-y-2 text-slate-300">

          <div>📍 Mexico City</div>

          <div>📍 Guadalajara</div>

          <div>📍 Monterrey</div>

        </div>

      </div>

    </div>
  )
}

export default GroupCard