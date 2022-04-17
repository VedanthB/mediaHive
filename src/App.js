import { Footer, Header } from "./frontend/components";

import { WebsiteRoutes } from "./frontend/routes";

function App() {
  return (
    <div>
      <Header />

      <WebsiteRoutes />

      <Footer />
    </div>
  );
}

export default App;
