import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <div className="h-screen"></div>
    </>
  );
}

export default App;
