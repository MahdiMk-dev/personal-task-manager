import "./App.css";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "../pages/Board/index";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Board />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
