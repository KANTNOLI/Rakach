import { Route, Routes, useLocation } from "react-router"
import Header from "./components/Header"
import { useEffect, useState } from "react"
import AboutMe from "./components/AboutMe";

function App() {
  const location = useLocation()

  const path = location.pathname;
  const currentPage = path.split('/').filter(Boolean).pop() || "AboutMe";

  const [PagePosition, setPagePosition] = useState<string>(currentPage || "AboutMe")


  useEffect(() => {
    const path = location.pathname;
    const currentPage = path.split('/').filter(Boolean).pop() || "AboutMe";
    setPagePosition(currentPage);
  }, [location])



  return (
    <>
      <Header page={PagePosition} />
      <Routes>
        <Route path="/" element={<AboutMe />} />

        <Route path="/a" element={<p>test a</p>} />
        <Route path="/b" element={<p>test b</p>} />
        <Route path="/c" element={<p>test c</p>} />

        <Route path="*" element={<p>Error</p>} />
      </Routes>
    </>
  )
}

export default App
