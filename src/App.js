import "./App.css";
import Main from "./Main";
import Navbar from "./Navbar";

function App() {
    return (
        <div className="App">
            <div className="Nav">
                <Navbar />
            </div>
            <div className="Main">
                <Main />
            </div>
        </div>
    );
}

export default App;
