import logo from "./logo.svg";
import "./App.css";
import Functional_componet from "./Componets/Functional_componet";
import Hello from "./Componets/Class_componet";
import Wellcome_jsx from "./Componets/Wellcome_jsx";
import Fullname from "./Componets/Props";
import Subscribe from "./Componets/State";
import Event_function from "./Componets/Event_function";
import Event_on_class from "./Componets/Event_on_class";
import Event_bindig from "./Componets/Event_bindig";
import Conditonal_render from "./Componets/Conditonal_render";
import Lists from "./Componets/Lists";
import Style from "./Componets/Style";
import Style_inline from "./Componets/Style_inline";
import Form from "./Componets/Form";
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
      <Event_function />
      <Event_on_class />
      <Event_bindig />
      <Conditonal_render />
      <Lists />
      <Style heading={false} />
      <Style_inline />
      <Form />
    </div>
  );
}

export default App;
