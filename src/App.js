import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import SimpleSlider from "./pages/slider/SliderPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={SimpleSlider} />
        {/* <Redirect path="/" /> */}
      </Switch>
    </div>
  );
}

export default App;
