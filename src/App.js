import './App.css';
import Navbar from './Components/Navbar'
import traveldata from './Assets/traveldata'
import TravelCard from './Components/TravelCard'

function App() {

  const cards = traveldata.map(item => {
    return (
      <TravelCard 
        key={item.id}
        item={item}
        />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <section className="cards-list">
      {cards}
      </section>
    </div>
  );
}

export default App;
