import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section01 from "./components/Section01";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Section01 />
      </main>
      <div className="h-screen"></div>
    </>
  );
}

export default App;
