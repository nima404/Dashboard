import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { ThemeContextProvider } from "./context/themeContext";
function App() {
  return <div className="App">
    <ThemeContextProvider>
      <Dashboard />
    </ThemeContextProvider>
  </div>;
}

export default App;
