import CounterComponent from "./CounterComponent";
import ShowHideComponent from "./ShowHideComponent";

function App() {
    return ( <
        div className = "App" >
        <CounterComponent counter={10}/>
        <ShowHideComponent/>
        </div>
    );
}

export default App;