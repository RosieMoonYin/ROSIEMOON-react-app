import Home from "./components/Home";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <Message greet="Welcome" name="Rosie" />
      <Home />
    </div>
  );
}

export default App;
