function FixtureGroup({ fixture }) {
  return (
    <div className="bg-slate-800 rounded-xl p-5">
      <h2 className="text-2xl font-bold mb-4">
        Grupo {fixture.group}
      </h2>

      {fixture.matches.map((match, index) => (
        <div
          key={index}
          className="border-b border-slate-700 py-3"
        >
          <div>
            {match.home} vs {match.away}
          </div>

          <div className="text-slate-400 text-sm">
            {match.date}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FixtureGroup