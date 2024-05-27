import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// components
import Header from '@components/Header/Header'

// pages
import Home from '@pages/Home/Home'
import Notice from '@pages/Notice/Notice'
import { Content, ContentPages } from './style'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Content>
          <ContentPages>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/notice/:id" element={<Notice />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </ContentPages>
        </Content>
      </Router>
    </>
  )
}

export default App
