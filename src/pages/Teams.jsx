import { groups } from '../data/groups'

function Teams() {
  const teams = groups.flatMap(group =>
    group.teams.map(team => ({
      ...team,
      group: group.group,
    }))
  )

  return (
    <div className="p-10">

      <h1 className="text-6xl font-light text-center mb-10">
        World Cup Teams
      </h1>

      <div
        className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
        "
      >

        {teams.map((team) => (

          <div
            key={team.name}
            className="
              bg-slate-900/70
              border
              border-cyan-500/30
              rounded-2xl
              p-6
              backdrop-blur-sm
              text-center
              hover:border-cyan-400
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >

            <img
              src={`https://flagcdn.com/${team.code}.svg`}
              alt={team.name}
              className="w-20 mx-auto mb-4"
            />

            <h3
              className="
                text-xl
                font-bold
                mb-2
              "
            >
              {team.name}
            </h3>

            <div className="text-cyan-400">
              Group {team.group}
            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Teams