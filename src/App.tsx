import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bulma/css/bulma.min.css";
import { store } from "./rematch/store";
import AppRoutes from "./Routes";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </>
  );
}

export default App;
