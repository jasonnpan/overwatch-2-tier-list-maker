import Heroes from "./components/Heroes/Heroes";
import TierContainer from "./components/TierContainer/TierContainer"
import TierListHeader from "./components/TierListHeader/TierListHeader"
import './app.css'

function App() {
  return (
    <div className="tierList">
      <TierListHeader />
      <TierContainer />
      <Heroes />
    </div>
  );
}

export default App;
