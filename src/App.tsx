import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }

      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    }

    window.addEventListener("srcoll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
