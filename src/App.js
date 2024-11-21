import logo from "./logo.svg";
import "./App.css";
import Functional_componet from "./Componets/Functional_componet";
import Hello from "./Componets/Class_componet";
import Wellcome_jsx from "./Componets/Wellcome_jsx";
import Fullname from "./Componets/Props";
import Subscribe from "./Componets/State";
function App() {
  return (
    <div className="App">
      <Functional_componet />
      <Hello />
      <Wellcome_jsx />
      <Fullname name="dereje" age="23">
        <p> this is react tutorial</p>
        <button>clickme</button>
      </Fullname>
      <Fullname name="tesema" age="25" />
      <Fullname name="getachew" age="29" />
      <Subscribe />

      
    </div>
  );
}

export default App;
