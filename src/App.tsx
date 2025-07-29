import { Route, Routes, useLocation } from "react-router"
import Header from "./components/Header"
import { useEffect, useState } from "react"

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
    <Routes>
      <Route path="/" element={<Header page={PagePosition} />} />

      <Route path="/a" element={<Header page={PagePosition} />} />
      <Route path="/b" element={<Header page={PagePosition} />} />
      <Route path="/c" element={<Header page={PagePosition} />} />

      <Route path="*" element={<p>Error</p>} />
    </Routes>
  )
}

export default App
