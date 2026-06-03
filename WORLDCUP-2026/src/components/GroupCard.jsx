import { flags } from '../data/flags'

function GroupCard({ group }) {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700">
      <div className="bg-cyan-500 text-black font-bold text-center py-3">
        Grupo {group.group}
      </div>

      <table className="w-full text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="p-2">#</th>
            <th className="p-2 text-left">Equipo</th>
            <th className="p-2">Pts</th>
            <th className="p-2">PJ</th>
            <th className="p-2">PG</th>
            <th className="p-2">PE</th>
            <th className="p-2">PP</th>
            <th className="p-2">GF</th>
            <th className="p-2">GC</th>
            <th className="p-2">Dif</th>
          </tr>
        </thead>

        <tbody>
          {group.teams.map((team, index) => (
            <tr
              key={team.name}
              className="border-t border-slate-700 hover:bg-slate-700"
            >
              <td className="p-2 text-center">
                {index + 1}
              </td>

              <td className="p-2">
                <div className="flex items-center gap-2">
                 <img
                  src={`https://flagcdn.com/${team.code}.svg`}
                  alt={team.name}
                  width="24"
                />

                  <span>{team.name}</span>
                </div>
              </td>

              <td className="p-2 text-center">
                {team.points}
              </td>

              <td className="p-2 text-center">
                {team.played}
              </td>

              <td className="p-2 text-center">
                {team.won}
              </td>

              <td className="p-2 text-center">
                {team.draw}
              </td>

              <td className="p-2 text-center">
                {team.lost}
              </td>

              <td className="p-2 text-center">
                {team.gf}
              </td>

              <td className="p-2 text-center">
                {team.gc}
              </td>

              <td className="p-2 text-center">
                {team.diff}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GroupCard