import './App.css'
import Event from './components/Event'
import ExploreWorld from './components/ExploreWorld'
import Hard from './components/Hard'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <Event />
      <ExploreWorld />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/category/soft" />} />
          <Route path="/category/:type" element={<Hard />} />
          <Route path="/alphabet/:alphabet_name" element={<Hard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
