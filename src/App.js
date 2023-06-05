import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import AlcoholList from "./AlcoholList"
import DrinkContainer from "./DrinkContainer"

function App() {
  return (
    <div className="App">
      <Header />
      <AlcoholList />
      <DrinkContainer />
    </div>
  );
}

export default App;
