import "./App.css";
import Timer from "./components/Timer";

function App() {
  const handleTimerEnd = () => {
    alert("time is up!");
  };

  return (
    <div className="App">
      <h1>timer</h1>

      <Timer time={30} direction="clockwise" end={handleTimerEnd} />
      <Timer time={20} direction="anticlockwise" end={handleTimerEnd} />
    </div>
  );
}

export default App;
