import About from "./components/About/About";
import Celebrate from "./components/Celebrate/Celebrate";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Send from "./components/Send/Send";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header className="App" />
      <Home className="App" />
      <About className="App" />
      <Send className="App" />
      <Celebrate className="App" />
    </div>
  );
}

export default App;
