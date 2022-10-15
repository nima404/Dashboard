import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { SidebarContextProvider } from "./context/sidebarContext";
import { ThemeContextProvider } from "./context/themeContext";
function App() {
  return <div className="App">
    <ThemeContextProvider>
      <SidebarContextProvider>
        <Dashboard />
      </SidebarContextProvider>
    </ThemeContextProvider>
  </div>;
}

export default App;
