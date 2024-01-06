import './App.css';
import Item from './components/item'
import Button from './components/button'
import Option from './components/optionBTN'

function App() {
  return (
    <>
      <div className='mainDiv'>
        <div className='container'>
          <div><h1>TODO LIST</h1></div>
          <div className='buttons'>
            <Button /> <Option />
          </div>
          <div className='allItems'>
            <Item text="Create a react project" date="5:30 PM,01/06/16" />
            <Item text="Learn React" date="5:33 PM,01/06/16" />
            <Item text="Create a Todo App" date="5:35 PM,01/06/16" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
