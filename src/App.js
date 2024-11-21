import logo from "./logo.svg";
import "./App.css";
import Functional_componet from "./Componets/Functional_componet";
import Hello from "./Componets/Class_componet";
import Wellcome_jsx from "./Componets/Wellcome_jsx";
function App() {
  return (
    <div className="App">
      <Functional_componet />
      <Hello />
      <Wellcome_jsx />
    </div>
  );
}

export default App;
