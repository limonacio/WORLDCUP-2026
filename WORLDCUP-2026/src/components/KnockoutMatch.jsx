function KnockoutMatch({ match }) {
  return (
    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
      <div>{match.team1}</div>
      <hr className="my-2 border-slate-600" />
      <div>{match.team2}</div>
    </div>
  )
}

export default KnockoutMatch