import { fixtures } from '../data/fixtures'
import FixtureGroup from '../components/FixtureGroup'

function Fixtures() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        World Cup Fixtures
      </h1>

      <div className="grid gap-6">
        {fixtures.map((fixture) => (
          <FixtureGroup
            key={fixture.group}
            fixture={fixture}
          />
        ))}
      </div>
    </div>
  )
}

export default Fixtures