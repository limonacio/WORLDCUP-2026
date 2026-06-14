import { NavLink } from 'react-router-dom'
import legendarioIcono from '../assets/LEGENDARIOICONO.png'

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#0f172a',
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px',
      }}
    >
      {/* LOGO + TITULO */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexShrink: 0,
        }}
      >
        <img
          src={legendarioIcono}
          alt="Z Sports"
          style={{
            width: '28px',
            height: '28px',
            objectFit: 'contain',
          }}
        />

        <h2
          style={{
            color: '#38bdf8',
            margin: 0,
            fontSize: '0.95rem',
            fontWeight: '700',
            letterSpacing: '1px',
            whiteSpace: 'nowrap',
          }}
        >
          ZETA-SPORTS
        </h2>
      </div>

      {/* MENU */}
      <div
  style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    fontSize: '0.9rem',
  }}
>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300'
              : 'text-white transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'
          } 
        >
          Home
        </NavLink>

        

        <NavLink
          to="/matches"
          className={({ isActive }) =>
            isActive
              ? 'text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300'
              : 'text-white transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'
          }
        >
          Matches
        </NavLink>

        <NavLink
          to="/standings"
          className={({ isActive }) =>
            isActive
              ? 'text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300'
              : 'text-white transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'
          }
        >
          Standings
        </NavLink>

        <NavLink
          to="/knockout"
          className={({ isActive }) =>
            isActive
              ? 'text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300'
              : 'text-white transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'
          }
        >
          Knockout
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar