import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section01 from "./components/Section01";
import Section02 from "./components/Section02";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Section01 />
        <Section02 />
      </main>
      <div className="h-screen"></div>
    </>
  );
}

export default App;
