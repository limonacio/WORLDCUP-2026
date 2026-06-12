function KnockoutCard({ match }) {
  return (
    <div
      className="
        bg-slate-900/70
        border
        border-cyan-500/30
        rounded-xl
        p-5
      "
    >
      <div className="space-y-3">

        <div className="font-semibold">
          {match.home}
        </div>

        <div className="border-t border-slate-700"></div>

        <div className="font-semibold">
          {match.away}
        </div>

      </div>
    </div>
  )
}

export default KnockoutCard