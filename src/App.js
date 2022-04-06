import './App.css';

import { Header } from './frontend/components';

import { WebsiteRoutes } from './frontend/routes';

function App() {
  return (
    <div>
      {/* nav */}
      <Header />
      {/* website routes */}
      <WebsiteRoutes />

      {/* footer */}
    </div>
  );
}

export default App;
