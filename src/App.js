import "./App.css";
import Head from "./components/Head";
import AddTransaction from "./components/AddTransaction";
import HistoryPage from "./components/HistoryPage";

function App() {
  return (
    <>
      <Head></Head>
      <HistoryPage />
      <AddTransaction></AddTransaction>
    </>
  );
}

export default App;
