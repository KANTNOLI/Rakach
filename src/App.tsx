import { Route, Routes, useLocation } from "react-router"
import Header from "./components/Header"
import { useEffect, useState } from "react"
import AboutMe from "./components/AboutMe";
import {
  disableBodyScroll,
} from 'body-scroll-lock-upgrade';

function App() {
  const location = useLocation()

  const path = location.pathname;
  const currentPage = path.split('/').filter(Boolean).pop() || "Rakach";

  const [PagePosition, setPagePosition] = useState<string>(currentPage || "Rakach")


  useEffect(() => {

    disableBodyScroll(document.body);

    const path = location.pathname;
    const currentPage = path.split('/').filter(Boolean).pop() || "Rakach";

    console.log(currentPage);

    setPagePosition(currentPage);
  }, [location])




  return (
    <>
      <Header page={PagePosition} />
      <Routes>
        <Route path="/Rakach/" element={<AboutMe />} />

        <Route path="/Rakach/a" element={<p>test a</p>} />
        <Route path="/Rakach/b" element={<p>test b</p>} />
        <Route path="/Rakach/c" element={<p>test c</p>} />

        <Route path="*" element={<p>Error</p>} />
      </Routes>
    </>
  )
}

export default App
