import Countdown from "./components/countdown";
import Facebook from "./components/icons/facebook";
import Instagram from "./components/icons/instagram";
import Pinterest from "./components/icons/pinterest";
import SoundButton from "./components/sound-button";

const App = () => {
  return (
    <main className="flex flex-col justify-between h-screen">
      <section className="flex-1 space-y-24 flex flex-col justify-center">
        <header className="flex gap-4 justify-center items-center">
          <h1 className="text-white text-2xl tracking-[8px] font-light">
            WE'RE LAUNCHING SOON
          </h1>
          <SoundButton />
        </header>
        <div className="flex flex-col justify-between items-center">
          <Countdown endDate={"2025-08-19T10:40:07.530Z"} />
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
