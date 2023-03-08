import "./App.css";
import Carousel from "./Components/Carousel";

const DELAY = 1000;
const ELEMENTS = [1, <div>this is 2</div>, 3, 4, 5];
function App() {
  return (
    <div className="App">
      <h2>Carousel</h2>
      <Carousel delay={DELAY} list={ELEMENTS} />
    </div>
  );
}

export default App;
