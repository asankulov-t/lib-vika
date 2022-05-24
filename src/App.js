
// import {ThemeProvider} from '@mui/material';
import './App.css';
import BookItem from './components/bookItem';
import Slider from './components/swiper';
import data from './state';



function App() {
  return (
    <div className="App">
     <Slider/>
    <BookItem data={data.bookComponents}/>

    </div>
  );
}

export default App;
