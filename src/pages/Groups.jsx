import { groups } from '../data/groups'
import GroupPreview from '../components/GroupPreview'
import { matches } from '../data/matches'

function Groups() {
  return (
    <div className="p-10">

      <h1 className="text-6xl font-light text-center mb-10">
        World Cup Groups
      </h1>

      {/* STATS */}

      <div
        className="
          max-w-5xl
          mx-auto
          grid
          md:grid-cols-3
          gap-4
          mb-12
        "
      >

        <div
          className="
            bg-slate-900/70
            border
            border-cyan-500/30
            rounded-xl
            p-5
            text-center
          "
        >
          <div className="text-4xl mb-2">🏆</div>

          <div className="text-3xl font-bold text-cyan-400">
            48
          </div>

          <div className="text-slate-400">
            Teams
          </div>
        </div>

        <div
          className="
            bg-slate-900/70
            border
            border-cyan-500/30
            rounded-xl
            p-5
            text-center
          "
        >
          <div className="text-4xl mb-2">⚽</div>

          <div className="text-3xl font-bold text-cyan-400">
            12
          </div>

          <div className="text-slate-400">
            Groups
          </div>
        </div>

        <div
          className="
            bg-slate-900/70
            border
            border-cyan-500/30
            rounded-xl
            p-5
            text-center
          "
        >
          <div className="text-4xl mb-2">🎟️</div>

          <div className="text-xl font-bold text-cyan-400">
            Top 32 Teams
          </div>

          <div className="text-slate-400">
            Advance to Knockout
          </div>
        </div>

      </div>

      {/* GROUPS */}

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
        "
      >
        {groups.map((group) => (
          <GroupPreview
            key={group.group}
            group={group}
            matches={matches}
          />
        ))}
      </div>

    </div>
  )
}

export default Groups