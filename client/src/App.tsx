import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// components
import Header from '@components/Header/Header'

// pages
import Home from '@pages/Home/Home'
import Notice from '@pages/Notice/Notice'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Navigate to="/" />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
