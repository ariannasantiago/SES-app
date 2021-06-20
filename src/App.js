import {React} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieSearchList from './components/MovieSearchList';


function App() {
  return (
    <div className="App">
      <Header title="FindFlix"></Header>
      <MovieSearchList></MovieSearchList>
      <Footer title="FindFlix"></Footer>
    </div>
  );
}

export default App;
