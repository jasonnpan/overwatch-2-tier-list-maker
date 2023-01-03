import Heroes from "./components/Heroes/Heroes";
import TierContainer from "./components/TierContainer/TierContainer"
import TierListHeader from "./components/TierListHeader/TierListHeader"

function App() {
  return (
    <div className="App">
      <TierListHeader />
      <TierContainer />
      <Heroes />
    </div>
  );
}

export default App;
