import { matches } from '../data/matches'
import MatchCard from '../components/MatchCard'

function Matches() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        FIFA World Cup 2026 Fixtures
      </h1>

      <div className="grid gap-4">
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