import {React} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieSearchList from './components/MovieSearchList';


function App() {
  return (
    <div className="App">
      <Header title="Movies"></Header>
      <MovieSearchList></MovieSearchList>
      <Footer title="2021"></Footer>
    </div>
  );
}

export default App;
