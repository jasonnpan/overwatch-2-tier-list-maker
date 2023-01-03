import Heroes from "./components/Heroes/Heroes";
import TierContainer from "./components/TierContainer/TierContainer"
import TierListHeader from "./components/TierListHeader/TierListHeader"

const data = [
  { title: "S", items: ["1", "2", "3"] },
  { title: "A", items: ["4", "5"] },
];

function App() {
  return (
    <div className="App">
      <TierListHeader />
      <TierContainer data={data}/>
      <Heroes />
    </div>
  );
}

export default App;
