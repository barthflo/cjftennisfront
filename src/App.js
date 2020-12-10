import './App.css';
import { useState, useEffect} from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import FileUpload from './components/FileUpload';

function App() {
  const [intro, setIntro] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:8000/api/home/intro')
         .then(res => setIntro(res.data[0]))
  })

  return (
    <div className="App">
      <h1>{intro.title}</h1>
      <h2>{intro.body}</h2>
      {intro.video_url !== undefined &&
      <video autoPlay loop muted >
        <source src={`http://localhost:3000/upload/${intro.video_url}`} type="video/mp4"/>
      </video>
      }
      <FileUpload />
    </div>
  );
}

export default App;
