
import { Route, Routes } from "react-router-dom"
import HomePage from "../../pages/HomePage"
import About from "../../pages/About"
import Contact from "../../pages/Contact"
import Policy from "../../pages/Policy"
import PageNotFound from "../../pages/PageNotFound"

const AllRoutes = () => {
  return (
    <div>
      <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/policy" element={<Policy/>} />
       <Route path="/*" element={<PageNotFound/>} />
     </Routes>
    </div>
  )
}

export default AllRoutes