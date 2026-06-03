import { Link } from 'react-router-dom'

function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#07111f',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1
        style={{
          fontSize: '4rem',
          marginBottom: '20px',
        }}
      >
        FIFA World Cup 2026
      </h1>

      <p
        style={{
          fontSize: '1.3rem',
          maxWidth: '700px',
          color: '#b8c2d1',
          marginBottom: '40px',
        }}
      >
        Seguimiento completo del Mundial 2026.
        Fixture, grupos, resultados en vivo,
        estadísticas y fase eliminatoria.
      </p>

      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >

        <Link
          to="/groups"
          style={{
            backgroundColor: '#06b6d4',
            color: 'black',
            padding: '12px 24px',
            borderRadius: '10px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Ver Grupos
        </Link>

        <Link
          to="/matches"
          style={{
            backgroundColor: '#1e293b',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '10px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Ver Partidos
        </Link>
      </div>

  <div
    style={{
      display: 'flex',
      gap: '40px',
      marginTop: '60px',
    }}
  >
    <div>
      <h2>48</h2>
      <p>Teams</p>
    </div>

    <div>
      <h2>12</h2>
      <p>Groups</p>
    </div>

    <div>
      <h2>104</h2>
      <p>Matches</p>
    </div>
  </div>

    </div>
  )
}

export default Home