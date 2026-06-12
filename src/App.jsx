import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'

import Matches from './pages/Matches'
import Standings from './pages/Standings'
import Knockout from './pages/Knockout'
import Footer from './components/Footer'
import Teams from './pages/Teams'
import Hosts from './pages/Hosts'



function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/matches" element={<Matches />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/knockout" element={<Knockout />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/hosts" element={<Hosts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App