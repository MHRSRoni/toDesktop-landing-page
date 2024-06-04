import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Line from "@/components/Line";
import Section01 from "@/components/Section01";
import Section02 from "@/components/Section02";
import Section03 from "@/components/Section03";
import Section04 from "@/components/Section04";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Section01 />
        <Section02 />
        <Line />
        <Section03 />
        <Section04 />
      </main>
      <div className="h-screen"></div>
    </>
  );
}

export default App;
