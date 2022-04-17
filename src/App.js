import { Footer, Header } from "./frontend/components";

import { WebsiteRoutes } from "./frontend/routes";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer
        theme="dark"
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />

      <Header />

      <WebsiteRoutes />

      <Footer />
    </div>
  );
}

export default App;
