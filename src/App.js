import './App.css';
import Navbar from './Components/Navbar'
import traveldata from './Assets/traveldata'
import TravelCard from './Components/TravelCard'

function App() {

  const cards = traveldata.map(item => {
    return (
      <TravelCard 
        item={item}
        />
    )
  })

  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
