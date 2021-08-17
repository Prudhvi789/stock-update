import React from 'react';
import './App.css';

var costPrice = 0;
var noOfStocks = 0;
var sellingPrice = 0;

function App() {

  const [ result,setResult ] = React.useState('');

  const handler = (event) => {
    event.preventDefault();
    if(sellingPrice === costPrice){
      setResult('You haven\'t earned or lost anything')
    }
    else if(costPrice || noOfStocks || sellingPrice === 0){
      let change =  Math.abs( sellingPrice - costPrice ) * noOfStocks
      let percent = Math.abs(sellingPrice - costPrice)*100/costPrice
      setResult((sellingPrice - costPrice > 0 ? 'profit is ' : 'loss is ') +change+' and percent is '+percent+'%') 
    }
  }

  return (
    <div className="App">
      <header>
          <h1>Stock calculator</h1>
      </header>
      <form>
        <label>Stock purchased at :</label>
        <input onChange={(event)=>{ costPrice = event.target.value }} required></input>
        <label>Number of Stocks purchased :</label>
        <input onChange={(event)=>{ noOfStocks = event.target.value }} required></input>
        <label>Current price of Stock :</label>
        <input onChange={(event)=>{ sellingPrice = event.target.value }} required></input>
        <button onClick={(event)=>{handler(event)}}>Submit</button>
      </form>
      <div className="result">
        {result ? result : null}
      </div>
    </div>
  );
}

export default App;
