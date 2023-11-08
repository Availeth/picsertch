import Hero from './components/Hero'
import Search from './components/Search'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
            <Router>
              <Routes>
                    <Route path="/" element={<Hero />}/>
                    <Route path="/search" element={<Search />}/>
                </Routes>
            </Router>
          

      {/* <Hero/> */}
      {/* <Search/> */}
    </div>
  )
}

export default App