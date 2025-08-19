import { Route, Routes, useLocation } from "react-router"
import Header from "./components/Header"
import { useEffect, useState } from "react"
import AboutMe from "./components/AboutMe";
import IndividualCoaching from "./components/IndividualCoaching";
import HowWorks from "./components/HowWorks";
import Solutions from "./components/Solutions";

function App() {
  const location = useLocation()
  const path = location.pathname;
  const currentPage = path.split('/').filter(Boolean).pop() || "Rakach";

  const [PagePosition, setPagePosition] = useState<string>(currentPage || "Rakach")

  useEffect(() => {
    const path = location.pathname;
    const currentPage = path.split('/').filter(Boolean).pop() || "Rakach";

    setPagePosition(currentPage);
  }, [location])

  return (
    <>
      <Header page={PagePosition} />
      <Routes>
        <Route path="/Rakach/" element={<AboutMe />} />

        <Route path="/Rakach/Solutions/:page" element={<Solutions />} />
        <Route path="/Rakach/HowWorks" element={<HowWorks />} />
        <Route path="/Rakach/IndividualCoaching" element={<IndividualCoaching />} />

        <Route path="*" element={<p>Error</p>} />
      </Routes>
    </>
  )
}

export default App
