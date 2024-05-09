
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";


function App() {

  return (
    <main className="flex flex-col gap-4 bg-slate-300 items-center h-screen w-screen justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUpPage/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
