import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import FlipMove from "react-flip-move";
function App() {
  return (
    <FlipMove>
      <div className="App">
        <Todo />
      </div>
    </FlipMove>
  );
}

export default App;
