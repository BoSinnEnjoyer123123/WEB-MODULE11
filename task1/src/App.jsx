import Header from './components/Header';
import Set from './components/Set';
import data from './data.json';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Set set={data[0]} />
      </main>
    </div>
  );
}

export default App;
