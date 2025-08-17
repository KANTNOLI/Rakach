import { Route, Routes, useLocation } from "react-router"
import Header from "./components/Header"
import { useEffect, useState } from "react"
import AboutMe from "./components/AboutMe";
import IndividualCoaching from "./components/IndividualCoaching";


function App() {
  const location = useLocation()

  const path = location.pathname;
  const currentPage = path.split('/').filter(Boolean).pop() || "Rakach";

  const [PagePosition, setPagePosition] = useState<string>(currentPage || "Rakach")


  useEffect(() => {

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
        <Route path="/Rakach/HowWorks" element={<p>test b</p>} />
        <Route path="/Rakach/IndividualCoaching" element={<IndividualCoaching />} />

        <Route path="*" element={<p>Error</p>} />
      </Routes>
    </>
  )
}

export default App
