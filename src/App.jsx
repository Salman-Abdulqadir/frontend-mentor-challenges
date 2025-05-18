import Countdown from "./components/countdown";
import Facebook from "./components/icons/facebook";
import Instagram from "./components/icons/instagram";
import Pinterest from "./components/icons/pinterest";

const App = () => {
  return (
    <main className="flex flex-col justify-between h-screen">
      <section className="flex-1 space-y-24 flex flex-col justify-center">
        <header>
          <h1 className="text-white text-2xl text-center tracking-[8px] font-light">
            WE'RE LAUNCHING SOON
          </h1>
        </header>
        <div className="flex flex-col justify-between items-center">
          <Countdown />
        </div>
      </section>
      <footer className="h-[200px] flex justify-center items-center space-x-8">
        <Facebook className="text-inherit hover:text-soft-red transition-all duration-300 cursor-pointer" />
        <Pinterest className="text-inherit hover:text-soft-red transition-all duration-300 cursor-pointer" />
        <Instagram className="text-inherit hover:text-soft-red transition-all duration-300 cursor-pointer" />
      </footer>
    </main>
  );
};

export default App;
