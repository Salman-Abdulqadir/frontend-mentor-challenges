import Attribution from "./components/Attribution";
import Notifications from "./components/Notifications";
import "./styles/App.css";

function App() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-4">
      <Notifications />
      <Attribution />
    </main>
  );
}

export default App;
