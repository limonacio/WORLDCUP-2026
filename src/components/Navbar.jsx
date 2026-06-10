import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#0f172a',
        padding: '16px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* LOGO + TITULO */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <img
          src={logo}
          alt="Z Sports"
          style={{
            width: '34px',
            height: '34px',
            objectFit: 'contain',
          }}
        />

        <h2
          style={{
            color: '#38bdf8',
            margin: 0,
            fontSize: '1.1rem',
            fontWeight: '700',
            letterSpacing: '2px',
          }}
        >
          Z SPORTS
        </h2>
      </div>

      {/* MENU */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-cyan-400 font-bold' : 'text-white'
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/groups"
          className={({ isActive }) =>
            isActive ? 'text-cyan-400 font-bold' : 'text-white'
          }
        >
          Groups
        </NavLink>

        <NavLink
          to="/matches"
          className={({ isActive }) =>
            isActive ? 'text-cyan-400 font-bold' : 'text-white'
          }
        >
          Matches
        </NavLink>

        <NavLink
          to="/standings"
          className={({ isActive }) =>
            isActive ? 'text-cyan-400 font-bold' : 'text-white'
          }
        >
          Standings
        </NavLink>

        <NavLink
          to="/knockout"
          className={({ isActive }) =>
            isActive ? 'text-cyan-400 font-bold' : 'text-white'
          }
        >
          Knockout
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar