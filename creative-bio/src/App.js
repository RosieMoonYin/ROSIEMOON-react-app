import Home from "./components/Home";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <Home />
      <Message greet="Welcome" name="Rosie" />
    </div>
  );
}

export default App;
