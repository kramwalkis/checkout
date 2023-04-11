import "./App.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { ModalProvider } from "./context/modalContext";
import ModalPortal from "./components/layouts/Modal";

import CheckOutForm from "./components/forms/CheckOutForm";

function App() {
  return (
    <>
      <ModalProvider>
        <ModalPortal/>
          <Header />
          <section className="grow flex items-center justify-center bg-gray-200">
            <div className="bg-white rounded py-6 sm:py-9 px-5 sm:px-6 mx-4 sm:mx-0 mt-4 sm:mt-9 mb-3 sm:mb-12">
              <CheckOutForm />
            </div>
          </section>
          <Footer />        
      </ModalProvider>
    </>
  );
}

export default App;
