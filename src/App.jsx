import { Routes, Route } from "react-router-dom"

import NavbarComponents from "./components/navbarcomponents"
import { FooterComponents } from "./components/footercomponents"

import Homepages from "./pages/HomePages"
import kelaspages from "./pages/kelaspages"
import testimonialpages from "./pages/testimonialpages"
import faqpages from "./pages/faqpages"
import syaratketenpages from "./pages/syaratketenpages"

function App() {
  return <div>
    <NavbarComponents />

    <Routes>
      <Route path="/" Component={Homepages} />
      <Route path="/kelas" Component={kelaspages} />
      <Route path="/testimonial" Component={testimonialpages} />
      <Route path="/faq" Component={faqpages} />
      <Route path="/syaratketen" Component={syaratketenpages} />
    </Routes>

    <FooterComponents />

  </div>
}

export default App
