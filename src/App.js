import "./App.css";
import { SnackbarProvider } from "notistack";
import MyExpenseTracker from "./components/mainfile";

function App() {
  return (
    <SnackbarProvider>
      <div>
        <MyExpenseTracker />
      </div>
    </SnackbarProvider>
  );
}

export default App;
