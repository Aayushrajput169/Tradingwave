import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./ProtectedRoute";
import { GeneralContextProvider } from "./components/GeneralContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <Routes>
      <Route
        path="/*"
        element={
          <GeneralContextProvider>
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          </GeneralContextProvider>
        }
      />
    </Routes>
    <ToastContainer
        position="top-right"
        autoClose={1500}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;