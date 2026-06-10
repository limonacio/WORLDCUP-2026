import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Groups from './pages/Groups'
import Matches from './pages/Matches'
import Standings from './pages/Standings'
import Knockout from './pages/Knockout'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/knockout" element={<Knockout />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App