import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#0f172a',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h2
        style={{
          color: '#38bdf8',
          margin: 0,
        }}
      >
        World Cup 2026
      </h2>

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
  to="/Knockout"
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