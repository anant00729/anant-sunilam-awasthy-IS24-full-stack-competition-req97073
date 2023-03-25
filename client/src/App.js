import { GlobalProvider } from "./Context/GlobalContext";
import PageRoutes from './Pages/PageRoutes'
import './App.css'

function App() {
  return (
    <>
      <GlobalProvider>
        <PageRoutes/>
      </GlobalProvider>
    </>
  );
}

export default App;
