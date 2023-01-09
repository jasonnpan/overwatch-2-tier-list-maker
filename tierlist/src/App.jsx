import TierListHeader from "./components/TierListHeader/TierListHeader";
import HeroList from "./assets";
import TierListContent from "./components/TierListContent/TierListContent";
import "./app.scss";
import React, {useState} from 'react'

const data = [
    { title: "S", items: [] },
    { title: "A", items: [] },
];

function App() {
    const [dataList, setDataList] = useState(data);
    const [tier, setTier] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        dataList.push({ title: tier, items: [] });

        setTier("");
    };

    return (
        <div className="App">
            <TierListHeader />
            <TierListContent data={data} heroList={HeroList} />
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="tier"
                        name="tier"
                        value={tier}
                        placeholder="Tier"
                        onChange={(e) => setTier(e.target.value)}
                    ></input>
                    <button type="submit"> Add Tier </button>
                </form>
            </div>
        </div>
    );
}

export default App;
