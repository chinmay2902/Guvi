
import './App.css';
import Navbar from './components/Navbar';
import SearchBook from './components/Book';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'


function App() {
  const [progress,setProgress]=useState(0)

  return (
    <>
        <Navbar />
        <LoadingBar
            color='#6C63FF'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
        />

        <SearchBook setProgress={setProgress} />
        
    </>
  );
}

export default App;
