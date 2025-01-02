import { Routes, Route } from "react-router-dom";
import NavbarComponents from "./components/navbarcomponents";
import { FooterComponents } from "./components/footercomponents";
import Homepages from "./pages/HomePages";
import Kelaspages from "./pages/KelasPages";
import Testimonialpages from "./pages/Testimonialpages";
import Faqpages from "./pages/Faqpages";
import Syaratketenpages from "./pages/Syaratketenpages";

function App() {
  return (
    <div>
      <NavbarComponents />
      <Routes>
        <Route index element={<Homepages />} />
        <Route path="kelas" element={<Kelaspages />} />
        <Route path="testimonial" element={<Testimonialpages />} />
        <Route path="faq" element={<Faqpages />} />
        <Route path="syaratketen" element={<Syaratketenpages />} />
      </Routes>
      <FooterComponents />
    </div>
  );
}

export default App;
