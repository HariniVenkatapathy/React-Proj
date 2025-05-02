import React from 'react';
import Card from './Card.jsx'
import Niya from './assets/cato1.jpg'
import cat1 from './assets/cato2.jpg'
import cat2 from './assets/cato3.jpg'
import cat4 from './assets/cato4.jpg'
import cat5 from './assets/cato5.jpg'
import cat6 from './assets/cato6.jpg'
import cat7 from './assets/cato7.jpg'
import cat8 from './assets/cato8.jpg'
function App() {
  return(
    <>
    <Card image={Niya} name="Niya" age={2}/>
    <Card image={cat1} name="Ruby" age={1}/>
    <Card image={cat2} name="Sakura" age={3}/>
    <Card image={cat4} name="yuki" age={2}/>
    <Card image={cat5} name="natsu" age={1}/>
    <Card image={cat6} name="yumi" age={3}/>
    <Card image={cat7} name="kasa" age={4}/>
    <Card image={cat8} name="luffy" age={3}/>
    </>
  );
}

export default App
