import { roundOf16 } from '../data/knockout'
import KnockoutMatch from '../components/KnockoutMatch'

function Knockout() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Knockout Stage
      </h1>

      <h2 className="text-2xl mb-4">
        Round of 16
      </h2>

      <div className="grid gap-4">
        {roundOf16.map((match, index) => (
          <KnockoutMatch
            key={index}
            match={match}
          />
        ))}
      </div>
    </div>
  )
}

export default Knockout