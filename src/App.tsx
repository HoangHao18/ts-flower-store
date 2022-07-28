
import './App.css'
import { Flower } from './Types/flowerType'
import { FlowerForm } from './View/Flower/FlowerForm'
import { FlowerTable } from './View/Flower/FlowerTable'
const initData: Flower[] = [{
  "unit": "unit 1",
  "name": "name 1",
  "image": [],
  "price": 96,
  "stockQuantity": 10,
  "_id": "1"
}]
function App() {
  return (
    <div className="App">
      <FlowerForm/>
      <FlowerTable flowersList={initData}/>
      
    </div>
  )
}

export default App
