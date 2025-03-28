import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/Bottles/Bottles'



// const bottlesPromise = fetch('./bottles.json').then(res => res.json());

const bottlesPromise = fetch('./bottles.json')
.then(res => res.json())

function App() {

// const bottles = [
//   {id: 1, name: 'Pink Nike Bottle', price: 250, color: 'pink'},
//   {id: 2, name: 'Pink Nike Bottle', Price: 250, color:'Pink'},
//   {id: 3, name: 'Pink Nike Bottle', Price: 250, color:'Pink'},
//   {id: 4, name: 'Pink Nike Bottle', Price: 250, color:'Pink'},
// ]


  return (
    <>
       <Suspense fallback={<h3>Bottles are loading.....</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
       </Suspense>
      <h1>Buy Awsome Water Bottle</h1>

    </>
  )
}

export default App
