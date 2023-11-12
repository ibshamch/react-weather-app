import { createRoot } from "react-dom/client";
import Homepage from "../routes/Homepage";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Clouds } from "./Clouds";
import { Farenheit } from "./Farenheit";
import { Celcius } from "./Celcius";
const App = () => {
  return (
    <BrowserRouter>
      <h1>
        <Link className="link" to="/">
          Weather App
        </Link>
      </h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/clouds" element={<Clouds />} />
        <Route path="/celcius" element={<Celcius />} />
        <Route path="/farenheit" element={<Farenheit />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = document.querySelector("#root");
const container = createRoot(root);
container.render(<App />);

export default App;
