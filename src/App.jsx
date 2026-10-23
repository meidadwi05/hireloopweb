import { useEffect } from "react";
import SiteHeader from "./components/SiteHeader.jsx";
import SectionHero0 from "./components/SectionHero0.jsx";
import SectionSearchArea1 from "./components/SectionSearchArea1.jsx";
import SectionWrap3 from "./components/SectionWrap3.jsx";
import SectionFokus5 from "./components/SectionFokus5.jsx";
import SectionManfaat6 from "./components/SectionManfaat6.jsx";
import SectionIndustri8 from "./components/SectionIndustri8.jsx";
import SectionLowongan9 from "./components/SectionLowongan9.jsx";
import SectionCara11 from "./components/SectionCara11.jsx";
import SectionTentang13 from "./components/SectionTentang13.jsx";
import SectionAplikasi15 from "./components/SectionAplikasi15.jsx";
import SectionPetunjukPwa17 from "./components/SectionPetunjukPwa17.jsx";
import SectionWrap19 from "./components/SectionWrap19.jsx";
import SectionFaq21 from "./components/SectionFaq21.jsx";
import SectionMulai23 from "./components/SectionMulai23.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import Overlay6 from "./components/Overlay6.jsx";
import Overlay7 from "./components/Overlay7.jsx";
import Overlay8 from "./components/Overlay8.jsx";
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}
let initialized = false;
export default function App() {
  useEffect(() => {
    if (initialized) return;
    initialized = true;
    loadScript("/interactions.js")
      .then(() => loadScript("/animations.js"))
      .then(() => {
        if (location.hash)
          document
            .getElementById(decodeURIComponent(location.hash.slice(1)))
            ?.scrollIntoView({ behavior: "instant" });
      })
      .catch(console.error);
  }, []);
  return (
    <>
      <SiteHeader />
      <main>
        <SectionHero0 />
        <SectionSearchArea1 />
        <SectionWrap3 />
        <SectionFokus5 />
        <SectionManfaat6 />
        <SectionIndustri8 />
        <SectionLowongan9 />
        <SectionCara11 />
        <SectionTentang13 />
        <SectionAplikasi15 />
        <SectionPetunjukPwa17 />
        <SectionWrap19 />
        <SectionFaq21 />
        <SectionMulai23 />
      </main>
      <SiteFooter />
      <Overlay6 />
      <Overlay7 />
      <Overlay8 />
    </>
  );
}
