import "./styles.css";
import Toast from "./components/Toast";

export default function App() {
  return (
    <div className="App">
      <Toast type="running" message="Try again later." />
    </div>
  );
}
