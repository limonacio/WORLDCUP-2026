function Hosts() {
  const hosts = [
    {
      country: 'Mexico',
      flag: 'mx',
      cities: 3,
      stadiums: 3,
    },
    {
      country: 'Canada',
      flag: 'ca',
      cities: 2,
      stadiums: 2,
    },
    {
      country: 'United States',
      flag: 'us',
      cities: 11,
      stadiums: 11,
    },
  ]

  return (
    <div className="p-10">

      <h1 className="text-6xl font-light text-center mb-12">
        Host Countries
      </h1>

      <div
        className="
          max-w-6xl
          mx-auto
          grid
          md:grid-cols-3
          gap-8
        "
      >

        {hosts.map((host) => (

          <div
            key={host.country}
            className="
              bg-slate-900/70
              border
              border-cyan-500/30
              rounded-2xl
              p-8
              text-center
              backdrop-blur-sm
              hover:border-cyan-400
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >

            <img
              src={`https://flagcdn.com/${host.flag}.svg`}
              alt={host.country}
              className="w-28 mx-auto mb-6"
            />

            <h2 className="text-3xl font-bold mb-4">
              {host.country}
            </h2>

            <div className="space-y-2 text-slate-300">

              <div>
                🏙️ {host.cities} Host Cities
              </div>

              <div>
                🏟️ {host.stadiums} Stadiums
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Hosts