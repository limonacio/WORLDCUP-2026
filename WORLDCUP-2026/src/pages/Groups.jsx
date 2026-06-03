import { groups } from '../data/groups'
import GroupCard from '../components/GroupCard'

function Groups() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        World Cup 2026 Groups
      </h1>

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
        {groups.map((group) => (
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