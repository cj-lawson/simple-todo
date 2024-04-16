import AuthProvider from "./provider/authProvider";
import Routes from "./pages/Routes";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
