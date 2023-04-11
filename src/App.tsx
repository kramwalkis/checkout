import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import { ModalProvider } from "./context/modalContext";
import ModalPortal from "./components/layouts/Modal";
import NotFound from "./pages/NotFound";

import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ModalProvider>
        <ModalPortal />
        <Header />
        <section className="grow flex items-center justify-center bg-gray-200">
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<NotFound/>} />
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<CheckOut />} />
            </Routes>
          </BrowserRouter>
        </section>
        <Footer />
      </ModalProvider>
    </>
  );
}

export default App;
