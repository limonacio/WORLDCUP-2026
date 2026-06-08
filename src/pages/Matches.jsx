import { matches } from '../data/matches'
import MatchCard from '../components/MatchCard'

function Matches() {
  return (
    <div className="p-6">

      <h1 className="text-4xl font-bold mb-10">
        FIFA World Cup 2026 Fixtures
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

        {matches.map((match, index) => (
          <MatchCard
            key={index}
            match={match}
          />
        ))}

      </div>

    </div>
  )
}

export default Matches