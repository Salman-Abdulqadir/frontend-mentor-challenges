import Header from "@components/Header";
import Hero from "@components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="min-w-screen min-h-screen flex flex-col items-center justify-center">
      <Header />
      <section className="w-full max-w-[1200px] p-4">
        <Hero />
        <About />
        <Testimonials />
        <Footer />
      </section>
    </main>
  );
};

export default App;
