import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">

      <h1 className="text-8xl font-bold text-cyan-400 mb-4">
        404
      </h1>

      <p className="text-2xl text-slate-300 mb-8">
        Page Not Found
      </p>

      <Link
        to="/"
        className="
          bg-cyan-500
          text-black
          px-8
          py-4
          rounded-xl
          font-bold
        "
      >
        Back Home
      </Link>

    </div>
  )
}

export default NotFound