import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react'
import { matches } from '../data/matches'


function Home() {
  const now = new Date()

const nextMatch =
  matches.find(
    (match) =>
      new Date(match.datetime) > now
  ) || matches[matches.length - 1]

const targetDate = new Date(nextMatch.datetime)

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
  const [scrollY, setScrollY] = useState(0)
  const currentMatchIndex = matches.findIndex(
  (match) =>
    new Date(match.datetime) > new Date()
)

const upcomingMatches =
  currentMatchIndex >= 0
    ? matches.slice(
        currentMatchIndex + 1,
        currentMatchIndex + 4
      )
    : []


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearInterval(timer)
      window.removeEventListener('scroll', handleScroll)
    }
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
          opacity-[0.12]
          pointer-events-none
          select-none
        "
        style={{
        transform: `translateY(${-400 + scrollY * 0.7}px)`,
      }}
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
            to="/matches"
            className="
              bg-slate-900/60
              backdrop-blur-sm
              text-white
              px-16
              py-7
              text-2xl
              rounded-xl
              font-bold
              border
              border-slate-700
              transition-all
              duration-300
              hover:bg-cyan-500
              hover:text-black
              hover:border-cyan-500
              hover:shadow-lg
              hover:shadow-cyan-500/20
              transition-all
              duration-300
            "
          >
            View Matches
          </Link>


          <Link
            to="/standings"
            className="
              bg-slate-900/60
              backdrop-blur-sm
              text-white
              px-16
              py-7
              text-2xl
              rounded-xl
              font-bold
              border
              border-slate-700
              transition-all
              duration-300
              hover:bg-cyan-500
              hover:text-black
              hover:border-cyan-500
              hover:shadow-lg
              hover:shadow-cyan-500/20
              transition-all
              duration-300
            "
          >
            View Standings
          </Link>

          

        </div>

        


        {/* NEXT MATCH */}
        <div className="w-full max-w-2xl">

          <div className="text-cyan-400 text-sm font-bold tracking-[3px] mb-4">
            NEXT MATCH
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

            <div className="flex items-center justify-center gap-8">

  <div className="flex items-center gap-4">

    <img
      src={`https://flagcdn.com/${nextMatch.homeFlag}.svg`}
      alt={nextMatch.home}
      className="w-12"
    />

    <span className="text-5xl font-bold">
      {nextMatch.home}
    </span>

  </div>

  <span className="text-cyan-400 text-5xl font-bold">
    VS
  </span>

  <div className="flex items-center gap-4">

    <img
      src={`https://flagcdn.com/${nextMatch.awayFlag}.svg`}
      alt={nextMatch.away}
      className="w-12"
    />

    <span className="text-5xl font-bold">
      {nextMatch.away}
    </span>

  </div>


            </div>

            <div className="text-slate-300 text-lg">
              {nextMatch.date}
            </div>

            <div className="text-cyan-400 font-semibold mt-2">
              🕒 {nextMatch.kickoffArgentina}
            </div>

            <div className="text-slate-400 mt-1">
              📍 {nextMatch.city}
            
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

        

        {/* UPCOMING MATCHES */}

          <div className="w-full max-w-5xl mt-20">

            <div className="h-24"></div>

            <div className="text-cyan-400 text-sm font-bold tracking-[3px] mb-6">
              UPCOMING MATCHES
            </div>

            <div className="grid md:grid-cols-3 gap-6">

              {upcomingMatches.map((match, index) => (

                <div
                  key={index}
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
                    {match.date}
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      gap-6
                      py-6
                    "
                  >

                    <div className="flex flex-col items-center">

                      <img
                        src={`https://flagcdn.com/${match.homeFlag}.svg`}
                        alt={match.home}
                        className="w-12 mb-2"
                      />

                      <span
                        className="
                          text-slate-300
                          text-sm
                          font-semibold
                          text-center
                        "
                      >
                        {match.home}
                      </span>

                    </div>

                    <div
                      className="
                        text-cyan-400
                        text-3xl
                        font-bold
                      "
                    >
                      VS
                    </div>

                    <div className="flex flex-col items-center">

                      <img
                        src={`https://flagcdn.com/${match.awayFlag}.svg`}
                        alt={match.away}
                        className="w-12 mb-2"
                      />

                      <span
                        className="
                          text-slate-300
                          text-sm
                          font-semibold
                          text-center
                        "
                      >
                        {match.away}
                      </span>

                    </div>

                  </div>

                  <div className="mt-4 text-center">

                    <div className="text-cyan-400 font-semibold">
                      🕒 {match.kickoffArgentina}
                    </div>

                    <div className="text-slate-400 text-sm mt-1">
                      📍 {match.city}
                    </div>

                  </div>

                </div>

              ))}

              

            </div>

          </div>

<div className="h-40"></div>

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