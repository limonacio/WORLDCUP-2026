import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react'

function Home() {
  const targetDate = new Date('2026-06-11T16:00:00')

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date()

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-5 overflow-hidden"
      style={{
        backgroundColor: '#07111f',
      }}
    >
      {/* HALO CYAN */}
      <div
        className="
          absolute
          w-[700px]
          h-[700px]
          rounded-full
          blur-[120px]
          opacity-20
          pointer-events-none
        "
        style={{
          background:
            'radial-gradient(circle, rgba(6,182,212,0.45) 0%, rgba(6,182,212,0.15) 35%, rgba(0,0,0,0) 70%)',
        }}
      />

      {/* LOGO DE FONDO */}
      <img
        src={logo}
        alt="Z Sports"
        className="
          absolute
          w-[900px]
          max-w-[90vw]
          opacity-[0.08]
          pointer-events-none
          select-none
        "
      />

      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col items-center">

        <h1 className="text-7xl font-light mb-8">
          FIFA World Cup 2026
        </h1>

        <p className="text-slate-300 text-2xl max-w-4xl mb-12">
          Complete coverage of the FIFA World Cup 2026.
          Fixtures, groups, live scores,
          standings and knockout stage.
        </p>

        {/* BOTONES */}
        <div className="flex gap-5 justify-center mb-16">

          <Link
            to="/groups"
            className="
              bg-slate-800
              text-white
              px-8
              py-3
              rounded-xl
              font-bold
              border
              border-slate-700
              transition-all
              duration-300
              hover:bg-cyan-500
              hover:text-black
              hover:border-cyan-500
            "
          >
            View Groups
          </Link>

          <Link
            to="/matches"
            className="
              bg-slate-800
              text-white
              px-8
              py-3
              rounded-xl
              font-bold
              border
              border-slate-700
              transition-all
              duration-300
              hover:bg-cyan-500
              hover:text-black
              hover:border-cyan-500
            "
          >
            See Matches
          </Link>

        </div>

        {/* ESTADÍSTICAS */}
        <div className="flex justify-center gap-16 mb-16">

          <div>
            <h2 className="text-3xl font-bold">48</h2>
            <p className="text-slate-400">Teams</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">12</h2>
            <p className="text-slate-400">Groups</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">104</h2>
            <p className="text-slate-400">Matches</p>
          </div>

        </div>

        {/* OPENING MATCH */}
        <div className="w-full max-w-2xl">

          <div className="text-cyan-400 text-sm font-bold tracking-[3px] mb-4">
            OPENING MATCH
          </div>

          <div
            className="
              bg-slate-900/70
              border
              border-cyan-500/30
              rounded-2xl
              p-8
              backdrop-blur-sm
              shadow-lg
              shadow-cyan-500/10
            "
          >

            <div className="flex items-center justify-center gap-10 mb-6">

              <div className="flex items-center gap-3">
                <img
                  src="https://flagcdn.com/mx.svg"
                  alt="Mexico"
                  className="w-10"
                />

                <span className="text-4xl font-bold">
                  Mexico
                </span>
              </div>

              <span className="text-cyan-400 text-4xl font-bold">
                VS
              </span>

              <div className="flex items-center gap-3">
                <img
                  src="https://flagcdn.com/za.svg"
                  alt="South Africa"
                  className="w-10"
                />

                <span className="text-4xl font-bold">
                  South Africa
                </span>
              </div>

            </div>

            <div className="text-slate-300 text-lg">
              June 11, 2026
            </div>

            <div className="text-slate-400 mb-6">
              📍 Mexico City
            </div>

            <div className="border-t border-slate-700 pt-4">

              <div className="text-cyan-400 text-sm font-bold tracking-[3px] mb-4">
                KICKOFF COUNTDOWN
              </div>

              <div className="flex justify-center gap-8">

                <div>
                  <div className="text-cyan-400 text-3xl font-bold">
                    {timeLeft.days}
                  </div>
                  <div className="text-xs text-slate-400 tracking-wider">
                    DAYS
                  </div>
                </div>

                <div>
                  <div className="text-cyan-400 text-3xl font-bold">
                    {timeLeft.hours}
                  </div>
                  <div className="text-xs text-slate-400 tracking-wider">
                    HOURS
                  </div>
                </div>

                <div>
                  <div className="text-cyan-400 text-3xl font-bold">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-xs text-slate-400 tracking-wider">
                    MIN
                  </div>
                </div>

                <div>
                  <div className="text-cyan-400 text-3xl font-bold">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-xs text-slate-400 tracking-wider">
                    SEC
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* HOST COUNTRIES */}

        <div className="w-full max-w-4xl mt-16">

          <div className="text-cyan-400 text-sm font-bold tracking-[3px] mb-6">
            HOST COUNTRIES
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div
              className="
                bg-slate-900/70
                border
                border-cyan-500/30
                rounded-2xl
                p-8
                backdrop-blur-sm
              "
            >

              <img
                src="https://flagcdn.com/mx.svg"
                alt="Mexico"
                className="w-24 mx-auto mb-6"
              />

              <h3 className="text-4xl font-bold mb-2">
                Mexico
              </h3>

              <p className="text-slate-400">
                Host Nation
              </p>

            </div>

            <div
              className="
                bg-slate-900/70
                border
                border-cyan-500/30
                rounded-2xl
                p-8
                backdrop-blur-sm
              "
            >

              <img
                src="https://flagcdn.com/ca.svg"
                alt="Canada"
                className="w-24 mx-auto mb-6"
              />

              <h3 className="text-4xl font-bold mb-2">
                Canada
              </h3>

              <p className="text-slate-400">
                Host Nation
              </p>

            </div>

            <div
                className="
                  bg-slate-900/70
                  border
                  border-cyan-500/30
                  rounded-2xl
                  p-8
                  backdrop-blur-sm
                "
              >

                <img
                  src="https://flagcdn.com/us.svg"
                  alt="United States"
                  className="w-24 mx-auto mb-6"
                />

                <h3 className="text-4xl font-bold mb-2">
                  United States
                </h3>

                <p className="text-slate-400">
                  Host Nation
                </p>

              </div>

          </div>

        </div>

        {/* NEXT MATCHES */}

        <div className="w-full max-w-5xl mt-20">

          <div className="text-cyan-400 text-sm font-bold tracking-[3px] mb-6">
            UPCOMING MATCHES
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Argentina vs Japan */}

            <div
              className="
                bg-slate-900/70
                border
                border-cyan-500/30
                rounded-2xl
                p-6
                backdrop-blur-sm
                transition-all
                duration-300
                hover:shadow-lg
                hover:shadow-cyan-500/20
                hover:-translate-y-1
              "
            >

              <div className="text-slate-400 mb-6">
                June 12, 2026
              </div>

              <div className="flex items-center justify-center gap-3 mb-4">

                <img
                  src="https://flagcdn.com/ar.svg"
                  alt="Argentina"
                  className="w-8"
                />

                <span className="text-3xl font-bold">
                  Argentina
                </span>

              </div>

              <div className="text-cyan-400 text-2xl font-bold my-4">
                VS
              </div>

              <div className="flex items-center justify-center gap-3">

                <img
                  src="https://flagcdn.com/jp.svg"
                  alt="Japan"
                  className="w-8"
                />

                <span className="text-3xl font-bold">
                  Japan
                </span>

              </div>

            </div>

            {/* Brazil vs Netherlands */}

            <div
              className="
                bg-slate-900/70
                border
                border-cyan-500/30
                rounded-2xl
                p-6
                backdrop-blur-sm
                transition-all
                duration-300
                hover:shadow-lg
                hover:shadow-cyan-500/20
                hover:-translate-y-1
              "
            >

              <div className="text-slate-400 mb-6">
                June 12, 2026
              </div>

              <div className="flex items-center justify-center gap-3 mb-4">

                <img
                  src="https://flagcdn.com/br.svg"
                  alt="Brazil"
                  className="w-8"
                />

                <span className="text-3xl font-bold">
                  Brazil
                </span>

              </div>

              <div className="text-cyan-400 text-2xl font-bold my-4">
                VS
              </div>

              <div className="flex items-center justify-center gap-3">

                <img
                  src="https://flagcdn.com/nl.svg"
                  alt="Netherlands"
                  className="w-8"
                />

                <span className="text-3xl font-bold">
                  Netherlands
                </span>

              </div>

            </div>

            {/* Spain vs Germany */}

            <div
              className="
                bg-slate-900/70
                border
                border-cyan-500/30
                rounded-2xl
                p-6
                backdrop-blur-sm
                transition-all
                duration-300
                hover:shadow-lg
                hover:shadow-cyan-500/20
                hover:-translate-y-1
              "
            >

              <div className="text-slate-400 mb-6">
                June 13, 2026
              </div>

              <div className="flex items-center justify-center gap-3 mb-4">

                <img
                  src="https://flagcdn.com/es.svg"
                  alt="Spain"
                  className="w-8"
                />

                <span className="text-3xl font-bold">
                  Spain
                </span>

              </div>

              <div className="text-cyan-400 text-2xl font-bold my-4">
                VS
              </div>

              <div className="flex items-center justify-center gap-3">

                <img
                  src="https://flagcdn.com/de.svg"
                  alt="Germany"
                  className="w-8"
                />

                <span className="text-3xl font-bold">
                  Germany
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* FEATURED TEAMS */}

        <div className="w-full max-w-6xl mt-20">

          <div className="text-cyan-400 text-sm font-bold tracking-[3px] mb-8">
            FEATURED TEAMS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            {/* ARGENTINA */}

            <div
              className="
                bg-slate-900/70
                border
                border-cyan-500/30
                rounded-2xl
                p-8
                backdrop-blur-sm
                transition-all
                duration-300
                hover:shadow-lg
                hover:shadow-cyan-500/20
                hover:-translate-y-1
              "
            >

              <img
                src="https://flagcdn.com/ar.svg"
                alt="Argentina"
                className="w-20 mx-auto mb-5"
              />

              <h3 className="text-3xl font-bold mb-2">
                Argentina
              </h3>

              <p className="text-cyan-400">
                World Champion
              </p>

            </div>

            {/* BRAZIL */}

            <div
              className="
                bg-slate-900/70
                border
                border-cyan-500/30
                rounded-2xl
                p-8
                backdrop-blur-sm
                transition-all
                duration-300
                hover:shadow-lg
                hover:shadow-cyan-500/20
                hover:-translate-y-1
              "
            >

              <img
                src="https://flagcdn.com/br.svg"
                alt="Brazil"
                className="w-20 mx-auto mb-5"
              />

              <h3 className="text-3xl font-bold mb-2">
                Brazil
              </h3>

              <p className="text-cyan-400">
                5 World Cups
              </p>

            </div>

            {/* FRANCE */}

            <div
              className="
                bg-slate-900/70
                border
                border-cyan-500/30
                rounded-2xl
                p-8
                backdrop-blur-sm
                transition-all
                duration-300
                hover:shadow-lg
                hover:shadow-cyan-500/20
                hover:-translate-y-1
              "
            >

              <img
                src="https://flagcdn.com/fr.svg"
                alt="France"
                className="w-20 mx-auto mb-5"
              />

              <h3 className="text-3xl font-bold mb-2">
                France
              </h3>

              <p className="text-cyan-400">
                2022 Runner-up
              </p>

            </div>

            {/* SPAIN */}

            <div
              className="
                bg-slate-900/70
                border
                border-cyan-500/30
                rounded-2xl
                p-8
                backdrop-blur-sm
                transition-all
                duration-300
                hover:shadow-lg
                hover:shadow-cyan-500/20
                hover:-translate-y-1
              "
            >

              <img
                src="https://flagcdn.com/es.svg"
                alt="Spain"
                className="w-20 mx-auto mb-5"
              />

              <h3 className="text-3xl font-bold mb-2">
                Spain
              </h3>

              <p className="text-cyan-400">
                European Contender
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Home