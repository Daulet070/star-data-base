import './App.css';
import Header from '../header'
import RandomPlanet  from '../random-planet'
import ItemList from '../item-list'
import PersonDetails from '../person-details'
// import Header from '../header'
function App() {
  return (
    <div className="container">
      <Header />
      <RandomPlanet />
      <ItemList />
      <PersonDetails />
    </div>
  );
}

export default App;
