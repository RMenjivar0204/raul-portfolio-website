// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <p>Welcome to my Website.</p>
      <p>This is a test from the Macbook</p>
      <p>Another test</p>
      <p>This is a test from the PC</p>
      <p>Macbook again, created some folders too</p>
      <p>Do you like the Header? It's a component now!</p>
      <Card 
        name="Raul"
        tel="(281)857-2391"
        email="raul.menjivar4@gmail.com"
        />
    </div>
  );
}

export default App;
