import { useState } from 'react'
import { groups } from '../data/groups'
import GroupCard from '../components/GroupCard'

function Groups() {
  const [selectedGroup, setSelectedGroup] = useState('ALL')

  const filteredGroups =
    selectedGroup === 'ALL'
      ? groups
      : groups.filter(
          (group) => group.group === selectedGroup
        )

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        World Cup 2026 Groups
      </h1>

      {/* STATS */}

      <div
        className="
          max-w-5xl
          w-full
          mx-auto
          mb-12
          grid
          md:grid-cols-3
          gap-4
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
            32 Teams
          </div>

          <div className="text-slate-400">
            Advance to Knockout Stage
          </div>
        </div>

      </div>

      {/* FILTERS */}

      <div className="flex justify-center gap-3 mb-10 flex-wrap">

        <button
          onClick={() => setSelectedGroup('ALL')}
          className={`px-5 py-3 rounded-xl border transition-all ${
            selectedGroup === 'ALL'
              ? 'bg-cyan-500 text-black border-cyan-500'
              : 'bg-slate-900 border-slate-700 text-white'
          }`}
        >
          ALL
        </button>

        {[
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
        ].map((groupLetter) => (

          <button
            key={groupLetter}
            onClick={() => setSelectedGroup(groupLetter)}
            className={`px-5 py-3 rounded-xl border transition-all ${
              selectedGroup === groupLetter
                ? 'bg-cyan-500 text-black border-cyan-500'
                : 'bg-slate-900 border-slate-700 text-white'
            }`}
          >
            {groupLetter}
          </button>

        ))}

      </div>

      {/* GROUPS */}

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          xl:grid-cols-3
          gap-6
          mt-8
        "
      >
        {filteredGroups.map((group) => (
          <GroupCard
            key={group.group}
            group={group}
          />
        ))}
      </div>

    </div>
  )
}

export default Groups